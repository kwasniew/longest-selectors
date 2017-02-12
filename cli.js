#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var longest = require('./');
longest(argv, console.log);