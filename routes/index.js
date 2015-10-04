var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YouTube Playlist Module' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
  searchTerm=res.data;
});

module.exports = router;
