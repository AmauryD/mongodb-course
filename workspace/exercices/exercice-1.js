const connectionString = require('./exercices/connection-db.js');
const db = connect(connectionString).getSiblingDB('sample_mflix');

const keanuReavesFilms = db.movies.find({
    cast: 'Keanu Reeves'
}).projection({
    title: 1
});



console.log(keanuReavesFilms);

const comedies = db.movies.find({
    genres: 'Comedy'
}).projection({
    genres: 1,
    title: 1
})

console.log(comedies);

const between2002And2008 = db.movies.find({
    year: {
        $gte: 2002,
        $lte: 2008 
    }
}).sort({
    year: 1
});

console.log(between2002And2008);

const mattDiamant = db.movies.find({
    cast: {
        $all: ['Chris O\'Donnell','Matt Damon']
    }
});

console.log(mattDiamant);