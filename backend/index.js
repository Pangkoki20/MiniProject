let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let cookie = require('cookie');
let app = express();
let passport = require('passport');

// app.use(cors());
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users

require('./passport.js')

const jwt = require('jsonwebtoken');

let datas = {
    Array: [
        { id: 1, title: 'การเว้นระยะห่างทางสังคม' },
        { id: 2, title: 'การสวมใส่หน้ากากอนามัย' },
        { id: 3, title: 'การล้างมือทำความสะอาด' }
    ]
}


router.route('/datas')
    .get((req, res) => res.json(datas))
    .post((req, res) => {
        let newData = {}
        newData.id = (datas.Array.length) ? datas.Array[datas.Array.length - 1].id + 1 : 1
        newData.title = req.body.title
        datas = { "Array": [...datas.Array, newData] }
        res.json(datas)
    })

router.route('/datas/:Data_id')
    .get((req, res) => {
        const Data_id = req.params.Data_id
        const id = datas.Array.findIndex(item => +item.id === + Data_id)
        res.json(datas.Array[id])
    })
    .put((req, res) => {
        const Data_id = req.params.Data_id
        const id = datas.Array.findIndex(item => +item.id === +Data_id)
        datas.Array[id].title = req.body.title
        res.json(datas.Array[id])
    })

    .delete((req, res) => {
        const Data_id = req.params.Data_id
        datas.Array = datas.Array.filter(item => +item.id !== +Data_id)
        res.json(datas.Array)
    })


router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console('Login: ', req.body, user, err, info)
        if (err) return next(err)
        if (user) {
            const token = jwt.sign(user, db.SECRET, {
                expiresIn: req.body.remember ? '7d' : '1d' //short-hand condition
            })
            // req.cookie.token = token
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            );
            res.statusCode = 200
            return res.json({ user, token })
        } else
            return res.status(422).json(info)
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: -1,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200
    return res.json({ message: 'Logout successful' })
})
router.post('/register',
    async (req, res) => {
        try {
            const SALT_ROUND = 10
            const { username, email, password } = req.body
            if (!username || !email || !password)
                return res.json({ message: "Cannot register with empty string" })
            if (db.checkExistingUser(username) !== db.NOT_FOUND)
                return res.json({ message: "Duplicated user" })

            let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
            hash = await bcrypt.hash(password, SALT_ROUND)
            users.users.push({ id, username, password: hash, email })
            res.status(200).json({ message: "Register success" })
        } catch {
            res.status(422).json({ message: "Cannot register" })
        }
    })

router.get('/alluser', (req, res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
    res.send('Respond without authentication');
});


app.use((err, req, res, next) => {
    let statusCode = err.status || 500
    res.status(statusCode);
    res.json({
        error: {
            status: statusCode,
            message: err.message,
        }
    });
});

app.listen(4001, () => {
    console.log("Yey, your server is running on port 4001");
});