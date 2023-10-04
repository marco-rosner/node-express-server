require('dotenv').config();

const mongoose = require('mongoose'); // singleton
const Person = require('../models/person')

const people = [
    { ID: "1", Name: "Marco Rosner", Nickname: "Rosner", Birth: "2000-10-01" },
    { ID: "2", Name: "João Rosner", Nickname: "João", Birth: "2000-10-02" },
    { ID: "3", Name: "Maria", Nickname: "Maria", Birth: "2000-10-03" },
]

const newMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'node-express-server'
    })
        .then(() => console.log('MongoDB connected!'))
        .catch(err => console.error('MongoDB connection error: ', err))

    // drop any missed document on people's collection
    await mongoose.connection.db.dropCollection('people')
        .catch(err => console.error('Error on drop people: ', err))

    Person(); // create people collection and indexes

    // create indexes compound for full text search
    await mongoose.connection.db.collection('people').createIndex({
        Name: "text",
        Nickname: "text"
    }, { default_language: 'portuguese' })

    // load default data
    await Person.insertMany(people)
}

const create = (p) => Person(p).save()

const get = (id) => Person.findOne({ ID: id })

const search = (term) => Person.find( { $text: { $search: term } }, {}, { limit: 50 })

const count = () => Person.countDocuments()

module.exports = { newMongoDB, create, get, search, count }