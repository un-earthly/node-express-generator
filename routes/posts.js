const express = require('express');
const router = express.Router();

/* GET all posts. */
router.get('/', (req, res) => {
  res.send('This is the fucking post');
});
/* GET specific posts. */
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send('This is the fucking post');
});
/* POST listing posts. */
router.post('/', (req, res) => {
  res.send('This is the fucking post');
});
/* PATCH updating post. */
router.patch('/:id', (req, res) => {
  res.send('This is the fucking post');
});
/* DELETE posts listing. */
router.delete('/:id', (req, res) => {
  res.send('This is the fucking post');
});


module.exports = router;
