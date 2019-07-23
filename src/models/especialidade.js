const mongoose = require('mongoose')

const Especialidade = mongoose.model('Especialidade', {
    codigo: {
      type: String,
      required: true,
      trim: true
    },
    nome: {
      type: String,
      required: true,
      trim: true
    },      
})

module.exports = Especialidade