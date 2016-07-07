// require our service worker register
require('./../sw-register.js');

// register angular app
angular.module('offlineFirst', ['ngMaterial']);

// require all the app scripts
const req = require.context('./', true, /^(?!.*(index)).*.js/igm);
req.keys().forEach((key) => req(key));
