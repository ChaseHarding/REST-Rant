const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'Krusty Krab' })

    let comment = await db.Comment.create({
        author: 'Plankton',
        rant: false,
        stars: 1.0,
        content: 'That crustacean has no idea how to properly run a business!'
    })
    
    place.comments.push(comment.id)
    
    await place.save()
    
    process.exit()
}

seed()

