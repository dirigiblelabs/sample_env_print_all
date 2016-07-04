/* globals $ */
/* eslint-env node, dirigible */

var env = require('core/env');
var response = require('net/http/response');

var allEnvVars = env.getAll();
allEnvVars.forEach(function (envVar) {
	response.println(envVar.key + "=" + envVar.value);
});

response.flush();
response.close();