var inport = process.env['INPORT_LISTEN'] || 'ipc:///tmp/routein' || 'tcp://127.0.0.1:12345';

var Module = require('..');
var Package = require('../package.json');
console.log("Package" , Package);

var debug = require('hitd-debug')(Package.name);

new Module(inport, { heartbeat : 30 } , function(){
	debug("started");
});
