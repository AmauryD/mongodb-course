load('./exercices/connection-db.js');

db.listingsAndReviews.deleteOne({
    _id: '10009999'
});

const reviews = db.listingsAndReviews.find({
    _id: '10009999'
});

console.log(reviews);