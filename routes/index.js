const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/register', (req, res) => {
  res.send("get user");
});
router.post('/register', (req, res) => {
  res.send("register user");
});
router.get('/login', (req, res) => {
  res.send("get login");
});
router.post('/login', (req, res) => {
  res.send("login using credentials");
});
router.get('/profile', (req, res) => {
  res.send("profile of a user");

});
router.put('/profile/:profile_id', (req, res) => {
  res.send("profile id" + " " + req.params.profile_id);
});
// forgot password

router.get('/forgot', (req, res) => {
  res.send("forgot pass of a user");
});
router.put('/f-pw', (req, res) => {
  res.send("forgot pass of a user");
});
// reset password
router.put('/reset/:token', (req, res) => {
  res.send("reset password of a user");
});
router.put('/reset/:token', (req, res) => {
  res.send("reset password of a user");
});

module.exports = router;
