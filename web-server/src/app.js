const path = require('path')
const express = require('express')
const app = express()

// Define paths for express config
const viewsPath = path.join(__dirname, '../templates')
const publicDirectoryPath = path.join(__dirname, '../public')

// setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')

// setup static directory to serve
app.use(express.static(publicDirectoryPath))    // root page


app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather App',
        name : 'Karamjit'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'ABOUT ME',
        name : 'Karamjit'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'HELP YOURSELF',
        name : 'Karamjit'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        weather : 23,
        units : "celsius",
        pollution : "boht zyada"
    })
})  // stays like this

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})