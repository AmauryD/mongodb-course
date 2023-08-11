const db = connect("mongodb://root:test123*@localhost:27017").getSiblingDB('sample_mflix');

// on set le movie_id car la DB est broken ...
const set = db.comments.updateOne({
    _id: ObjectId("5a9427648b0beebeb69579cf")
},{
    $set: {
        movie_id: ObjectId("573a1390f29313caabcd4135")
    }
});


const commentsWithMovie = db.comments.aggregate([
    {
        $match: {
            _id: ObjectId("5a9427648b0beebeb69579cf")
        }
    },
    {
        // SELECT * FROM comments LEFT JOIN movies ON comments.movie_id=movie._id;
        $lookup: {
            from: "movies",
            localField: "movie_id",
            foreignField: "_id",
            as: "movie"
        }
    },
    {
        $unwind: '$movie'
    }
])

console.log(commentsWithMovie);
