var express = require('express');
var router = express.Router();
var request = require('request');
var Article = require('../models/article');
var config = require('../../config/config');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
  res.render('index', {
    title: 'Offline First Apps',
    articles: articles,
  });
});

router.get('/banks', function (req, res, next) {
  request(config.openBanka.host+'/banks', function(error, response, body) {
    res.json(JSON.parse(body))
  });
});
