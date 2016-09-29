'use strict';

var LoopBackContext = require('loopback-context');
var helper = require('../helpers/helper');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.get('/test', function(req, res, next){
    helper.get().then(function(data){
      res.end("Test data: " + data);
    })
  });
  server.use(router);
};
