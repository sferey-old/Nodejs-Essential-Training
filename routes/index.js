
var FlightSchema = require('../schemas/flight');


module.exports = function(flights){

    var flight = require('../flight');

    for(var number in flights){
        flights[number] = flight(flights[number]);
    }

    var functions = {};

    functions.flight = function(req, res){
        var number = req.param('number');

        req.session.lastNumber = number;

        if(typeof flights[number] === 'undefined'){
            res.status(404).json({status: 'error'});
        } else {
            res.json(flights[number].getInformation());
        }
    };

    functions.arrived = function(req, res){
        var number = req.param('number');

        if(typeof flights[number] === 'undefined'){
            res.status(404).json({status: 'error'});
        } else {
            flights[number].triggerArrive();

            var record = new FlightSchema(flights[number].getInformation());

            record.save(function(err){
                if(err){
                    console.log(err);
                    res.status(500).json({status: 'failure'});
                } else {
                    res.json({status: 'success'});
                }
            });

            res.json({status: 'done'});
        }
    };


    functions.list = function(req, res){
        res.render('list', {
            title: 'All Flights',
            flights: flights });
        };



    functions.listjson = function(req, res){
        var flightData = [];

        for(var number in flights){
            flightData.push(flights[number].getInformation());
        }

            res.json(flightData);
    };

    functions.arrivals = function(req, res){
        FlightSchema.find()
        .setOptions({sort: 'actualArrive'})
        .exec(function(err, arrivals){
            if(err){
                console.log(err);
                res.status(500).json({status: 'failure'});
            } else {
                res.render('arrivals', {
                    title: 'Arrivals',
                    arrivals: arrivals,
                    lastNumber: req.session.lastNumber
                });
            }
        });
    };

    functions.login = function(req, res){
        res.render('login', {title: 'Log in'});
    };


    functions.user = function(req, res){
        if (req.session.passport.user === undefined){
            res.redirect('/login');
        } else {
            res.render('user', {title: 'Welcome',
            user: req.user
            })
        }
    };



    return functions;
};
