const mongoose = require('mongoose')

const Plano = mongoose.model('Plano', {
    nome: {
      type: String,
      required: true,
      trim: true
    }
})

module.exports = Plano