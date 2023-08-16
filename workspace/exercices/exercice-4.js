const db = connect("mongodb://root:test123*@localhost:27017").getSiblingDB(
  "shop"
);

const orders = db.orders.aggregate([
  {
    // on vérifie qu'il y a un item à joindre en vérifiant si le champ existe
    $match: {
      item: {
        $exists: true,
      },
    },
  },
  {
    // on joint l'item
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_item",
    },
  },
  {
    $unwind: "$inventory_item"
  }
]);

console.log(orders);
