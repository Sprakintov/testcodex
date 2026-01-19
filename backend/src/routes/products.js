const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await db.query('SELECT id, name, description, price, stock FROM products ORDER BY id DESC');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { name, description, price, stock } = req.body;
  const result = await db.query(
    'INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING id, name, description, price, stock',
    [name, description, price, stock]
  );
  res.status(201).json(result.rows[0]);
});

module.exports = router;
