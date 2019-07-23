const mongoose = require('mongoose')

const Estado = mongoose.model('Estado', {
    ID: {
        type: String,
        required: true,
        trim: true
    },
    Sigla: {
      type: String,
      required: true,
      trim: true
    },
    Nome: {
      type: String,
      required: true,
      trim: true
    },      
})

module.exports = Estado