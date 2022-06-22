const router = require('express').Router();

/* GET all posts. */
router.get('/', (req, res) => {
    res.send('This is the review');
});
/* GET specific posts. */
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send('This is the review' + " " + req.params.id);
});
/* POST listing posts. */
router.post('/', (req, res) => {
    res.send('This is the review');
});
/* PATCH updating post. */
router.patch('/:id', (req, res) => {
    res.send('This is the review');
});
/* DELETE posts listing. */
router.delete('/:id', (req, res) => {
    res.send('This is the review');
});


module.exports = router;