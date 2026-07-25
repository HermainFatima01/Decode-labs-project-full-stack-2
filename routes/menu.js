var express = require('express');
var router = express.Router();

// Dummy data - temporary storage (database ki jagah)
let menuItems = [
  { id: 1, name: "Chai", price: 50 },
  { id: 2, name: "Samosa", price: 30 }
];

// GET /menu - saara menu dikhayega
router.get('/', function(req, res) {
  res.json(menuItems);
});

// POST /menu - naya item add karega
router.post('/', function(req, res) {
  const { name, price } = req.body;

  // Validation - agar name ya price missing hai
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const newItem = {
    id: menuItems.length + 1,
    name: name,
    price: price
  };

  menuItems.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;