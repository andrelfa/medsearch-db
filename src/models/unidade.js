const mongoose = require('mongoose')

const Unidade = mongoose.model('Unidade', {
    nome: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true,
    },    
    longitude: {
        type: Number,
        required: true,
    },    
    planos_atendidos: {
        type: [String], 
        required: true,
        validate: [(value) => value.length > 0, 'Field "planos_atendidos" cannot be empty']
    },
    img: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = Unidade