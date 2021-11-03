var fs = require('fs');
const express = require('express');
const path = require('path');
var url = require('url');
// const config = require('../../../config/config');

const router = express.Router();

const folderName = __dirname.split(path.sep).pop();
// var folderPath = __dirname + `../../../projects/${folderName}/`;

router.get('/en', function(req, res, next) {
  res.render(`projects/index_en`, {
    folderName: '',
    csrfToken: req.csrfToken(),
    language: 'english',
    campaign: 'promotion',
  });
});

router.get('/vn', function(req, res, next) {
  res.render(`projects/index_vn`, {
    folderName: '',
    csrfToken: req.csrfToken(),
    language: 'vietnamese',
    campaign: 'promotion',
  });
});

module.exports = router;
