const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  const course = db.classes.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json({ message: 'Class not found' });

  res.json(course);
});

module.exports = router;
