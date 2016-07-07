// require our IndexedDB interface for caching banks info
var BanksCache = require('./../../idb');

angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var banks = [];
     var get = function() {
       var banksCache = new BanksCache();

       return banksCache.getBanks().then(function(docs){
         var request = $http.get('/banks').then((res) => {
           var banks = res.data.banks.slice(30, 60);
           banksCache.setBanks(banks);
           return banks;
         });

         return docs || request;
       });
     };

     return {
       get,
     };
   }]);
