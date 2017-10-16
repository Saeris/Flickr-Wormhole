/* eslint-disable */
'use strict';
var fs = require('fs');
fs.createReadStream('.env.default').pipe(fs.createWriteStream('.env'));
