const mongoose = require('mongoose')

const Cidade = mongoose.model('Cidade', {
    ID: {
        type: String,
        required: true,
        trim: true
    },
    Nome: {
      type: String,
      required: true,
      trim: true
    },
    Estado: {
      type: String,
      required: true,
      trim: true
    },      
})

module.exports = Cidade