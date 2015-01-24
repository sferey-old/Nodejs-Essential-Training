var mongoose = require('mongoose');

mongoose.connect('mongodb://userpame:password@ds031751.mongolab.com:31751/flights1');

module.exports = mongoose.connection;
