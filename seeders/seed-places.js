require('dotenv').config
const db = require('../models')

db.Place.deleteMany({})
.then(() => {
    console.log('Exisiting places deleted successfully')


db.Place.create([{
    name: 'Bobs Burgers',
    city: 'Seymours Bay',
    state: 'Chicago',
    cuisines: "Burgers, Fries, Pancakes",
    pic: "https://whatnowatlanta.com/wp-content/uploads/sites/2/2020/10/Bobs-Burgers-Sugarloaf-Mills-Mall.jpg",
    founded: 2011
}, {
    name: 'Krusty Krab',
    city: 'Bikini Bottom',
    state: 'Ocean',
    cuisines: "Krabby Patties",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Krusty_Krab.png/240px-The_Krusty_Krab.png",
    founded: 2007
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})
.catch(err => {
    console.error('Error deleting existing places:', err)
    process.exit(1)
})
})
