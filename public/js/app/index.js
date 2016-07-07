angular.module('offlineFirst', ['ngMaterial']);

// require all the app scripts
const req = require.context('./', true, /^(?!.*(app)).*.js/igm);
req.keys().forEach((key) => req(key));
