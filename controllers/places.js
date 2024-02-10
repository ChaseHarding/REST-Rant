const router = require('express').Router()
const places = require('../models/places.js')

// GET list of places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// Get details of a place
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404).render('error404')
  } else if (!places[id]) {
    res.status(404).render('error404')
  } else {
  res.render('places/show', { place: places[id] })
  }
})

router.get('/new', (req, res) => {
    res.render('places/new')
})





router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router 