const connectionString = require('./exercices/connection-db.js');
const db = connect(connectionString).getSiblingDB('sample_airbnb');

db.listingsAndReviews.deleteOne({
    _id: '10009999'
});

const reviews = db.listingsAndReviews.find({
    _id: '10009999'
});

console.log(reviews);