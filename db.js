var mongoose = require('mongoose');

mongoose.connect('mongodb://marley:marley@ds031691.mongolab.com:31691/flightsm');

module.exports = mongoose.connection;
