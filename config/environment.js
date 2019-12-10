/*jshint node:true*/
'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: require('../package').name,
    environment: environment
  }

  return ENV;
};
