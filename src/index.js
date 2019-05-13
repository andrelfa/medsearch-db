const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const Unidade = require('./models/unidade')

const app = express()
const port = process.env.PORT || 3001

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    }).catch((e) => {
        console.log(e);
        res.status(500).send();
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/unidade', (req, res) => {
    const unidade = new Unidade(req.body)

    unidade.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/unidade', (req, res) => {
    Unidade.find({}).then((unidades) => {
        res.send(unidades);
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/unidade/:id', (req, res) => {
    const _id = req.params.id;
    Unidade.findById(_id).then((unidade) => {
        if (!unidade) {
            return res.status(404).send();
        }

        res.send(unidade);
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})