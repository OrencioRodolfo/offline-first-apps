// require our IndexedDB interface for caching banks info
var BanksCache = require('./../../idb');

angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var banks = [];
     var get = function() {
       var banksCache = new BanksCache();
       // @TODO Load from IDB the list of banks.
       // Be aware that you must update the IDB in background, in order to potentially store new banks
       return $http.get('/banks').then((res) => {
         var banks = res.data.banks.slice(30, 60);
         banksCache.setBanks(banks);
         return banks;
       });
     };

     return {
       get,
     };
   }]);
