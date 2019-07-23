const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const Unidade = require('./models/unidade')
const Estado = require('./models/estado')
const Cidade = require('./models/cidade')
const Plano = require('./models/plano')
const Especialidade = require('./models/especialidade')
const bodyParser = require('body-parser')

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
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/unidade', (req, res) => {
    const unidade = new Unidade(req.body)

    unidade.save().then(() => {
        res.status(201).send(unidade)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/unidade', (req, res) => {
    console.log('params', req.query);
    Unidade.find({
      // "nome" : { '$regex' : req.query.nome, '$options' : 'i' }
      "planos_atendidos" : { $in : req.query.planos.split(',') }
    }).then((unidades) => {
        res.send(unidades);
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/estado', (req, res) => {
  Estado.find({}).then((estados) => {
      res.send(estados);
  }).catch((e) => {
      res.status(500).send()
  })
})

app.get('/cidade', (req, res) => {
  Cidade.find({}).then((cidades) => {
      res.send(cidades);
  }).catch((e) => {
      res.status(500).send()
  })
})

app.get('/especialidade', (req, res) => {
  Especialidades.find({}).then((especialidades) => {
      res.send(especialidades);
  }).catch((e) => {
      res.status(500).send()
  })
})

app.get('/plano', (req, res) => {
  Plano.find({}).then((planos) => {
      res.send(planos);
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