// require our IndexedDB interface for caching banks info
var BanksCache = require('./../../idb');

angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var get = function() {
       // @TODO store the banks list into the IndexedDB
       return $http.get('/banks').then((res) => {
         var banks = res.data.banks.slice(30, 60);
         return banks;
       });
     };

     return {
       get,
     };
   }]);
