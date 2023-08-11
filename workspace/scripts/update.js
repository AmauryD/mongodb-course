const connectionString = require('./exercices/connection-db.js');
const db = connect(connectionString).getSiblingDB('sample_airbnb');

db.listingsAndReviews.updateOne({
    _id: '10009999'
},{
    // $inc: incrémente un champ
    // $set: set une ou plusieurs valeurs
    // unset: supprime un champ
    // $rename: {
    //     beds: 'toilets'
    // }
    // $push: { // push dans un tableau une valeur
    //     amenities: 'Ouzbek Bed'
    // }
})

const reviews = db.listingsAndReviews.find({
    _id: '10009999'
});

console.log(reviews);