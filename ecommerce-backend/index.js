// to use process.env
require('dotenv').config()
const express = require('express')
const Product = require('./models/product')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.send("<h1>Products</h1>")
})

//READ
app.get('/api/supplier/products', (request, response) => {
    Product.find({}).then(items => {
        response.json(items)
    })
})

app.get('/api/supplier/products/:id', (request, response) => {
    Product.findById(request.params.id).then(item => {
        response.json(item)
    })
})

//CREATE
app.post('/api/supplier/products/add-item', (request, response) =>{
    const body = request.body

    const product = new Product({
        title: body.title,
        price: body.price,
        vendor: body.vendor,
        categories: body.categories,
        imgUrl: body.imgUrl,
        stock: body.stock,
        date: new Date().toISOString(),
        description: body.description
    })

    product.save().then(item => {
        response.json(item)
    })
    .catch(error => {
        console.log('An error occured, ', error.message);
    })
})

//UPDATE
app.put('/api/supplier/products/:id', (request, response) => {
    const body = request.body

    const product = new Product({
        title: body.title,
        price: body.price,
        vendor: body.vendor,
        categories: body.categories,
        imgUrl: body.imgUrl,
        stock: body.stock,
        date: new Date().toISOString(),
        description: body.description
    })

    Product.findByIdAndUpdate(request.params.id, product, { new: true })
        .then(updatedProduct => {
            response.json(updatedProduct)
        })
        .catch(error => {
            console.log('An error occured: ', error.message);
        })
})

//DELETE
app.delete('/api/supplier/products/:id', (request, response) => {
    Product.findByIdAndDelete(request.params.id)
        .then(product => {
            response.status(204).end()
        })
        .catch(error => {
            console.log("An error occured: ", error.message);
        })
})

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)