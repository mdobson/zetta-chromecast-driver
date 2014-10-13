var Scout = require('zetta-scout');
var util = require('util');
var nodecast = require('nodecast');
var Chromecast = require('./chromecast_driver');

var ChromecastScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(ChromecastScout, Scout);

ChromecastScout.prototype.init = function(next) {
  var network = nodecast.find();
  var self = this;
  network.on('device', function(device) {
    self.discover(Chromecast, device);
  });
  next();
};
