var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET browse page. */
router.get('/browse', function(req, res, next) {
  res.render('browse', { title: 'Browse Listings' });
});

/* GET upload page. */
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Upload Item' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;