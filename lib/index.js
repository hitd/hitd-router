var Broker = require('pigato').Broker;
var debug = require('hitd-debug')('hitd-router');

module.exports = function(inport, conf, callback) {
	debug('will start router on inport %s', inport);
	var broker = new Broker(inport, conf);

	broker.on('start', function() {
		if (callback) {
			callback();
		}
	});
	broker.start();

};
