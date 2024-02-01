const express = require('express');
const app = express();
// the value stored inexpress is actually a function, so now we call it to assign it to a variable 

app.get ('/', (req, res) => {
    res.send('Hello World')
})

app.get('/second', (req, res) => {
    res.send('Hello to my Second Route');
})


app.listen(3000, () => {
    console.log('Server running on port 3000...')
});