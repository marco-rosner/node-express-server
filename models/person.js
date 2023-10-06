const mongoose = require('mongoose');
const { Schema } = mongoose

const personSchema = new Schema({
    id: {type: 'string', index: 1 }, // id in asc order
    name: 'string',
    nickname: {type: 'string', index: { unique: 1 }},
    birth: 'string'
}, { timestamps: true })

module.exports = mongoose.model('Person', personSchema)