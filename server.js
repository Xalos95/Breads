//Expendicies
const express = require('express')

//confirmation
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//Breads
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})