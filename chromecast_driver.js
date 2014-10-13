var Device = require('zetta-device');
var util = require('util');

var Chromecast = module.exports = function(cast) {
  this._cast = cast;
  this._friendly = cast.name;
};

Chromecast.prototype.init = function(config) {
  config
    .type('chromecast')
    .name(this._friendly)
    .state('online')
    .when('online', { allow: ['cast'] })
    .map('cast', function(ytid, cb) {
      var youtube = this._cast.app('YouTube');
      youtube.start({v: ytid}, function(err) {
        if(cb) {
          cb();
        }
      });
    }, [{type: 'text', name: 'ytid'}]);
};
