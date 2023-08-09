let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("technocite");

// Récupération de données
// équivalent du SELECT * FROM <collection>;
const classrooms = db.classrooms.find();

console.log(classrooms);