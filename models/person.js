const mongoose = require('mongoose');
const { Schema } = mongoose

const personSchema = new Schema({
    ID: {type: String, index: 1 }, // id in asc order
    Name: String,
    Nickname: {type: String, index: { unique: true }},
    Birth: String
}, { timestamps: true })

module.exports = mongoose.model('Person', personSchema)