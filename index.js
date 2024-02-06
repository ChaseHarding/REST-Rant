require('dotenv').config()
const express = require('express');
const app = express();
// the value stored inexpress is actually a function, so now we call it to assign it to a variable 

// adding code above the routes to define the view engine(JSX)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get ('/', (req, res) => {
    res.render('home')
})

app.get('/second', (req, res) => {
    res.send('Hello to my Second Route');
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log('Server running on port 3000...')
});