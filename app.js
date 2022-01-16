const express = require ('express')

//create an app with express
const app = express()

//links to files inside public folder 
app.use(express.static('public'))

//home page
app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`)
})

//about page
app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
})

//ibs page
app.get('/ibs', (request, response) => {
    response.sendFile(`${__dirname}/views/ibs.html`)
})

//lifestyle page
app.get('/lifestyle', (request, response) => {
    response.sendFile(`${__dirname}/views/lifestyle.html`)
})

//quiz page
app.get('/quiz', (request, response) => {
    response.sendFile(`${__dirname}/views/quiz.html`)
})

//contact page
app.get('/contact', (request, response) => {
    response.sendFile(`${__dirname}/views/contact.html`)
})

//listen to request
app.listen(5002, () => {
    console.log('server started')
})