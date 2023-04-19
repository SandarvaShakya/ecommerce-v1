require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI
console.log('Connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log("Connected to database")
    })
    .catch(error => {
        console.log("An error occured: ", error.message);
    })

const itemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    vendor: String,
    categories: Array,
    imgUrl: String,
    stock: Number,
    date: Date,
    description: String
}, {collection : "items"})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Product', itemSchema)