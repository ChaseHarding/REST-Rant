const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Mels Drive-In',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Milkshakes, Burgers',
        pic: '/images/melsDriveIn.jpg'
      }, {
        name: 'McDonalds',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Burgers, Breakfast',
        pic: '/images/mcDonalds.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router 