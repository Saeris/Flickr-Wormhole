/* eslint-disable */
'use strict';
require('fs').createReadStream('.env.default').pipe(fs.createWriteStream('.env'));
