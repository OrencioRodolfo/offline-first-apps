angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var banks = [];
     var get = function() {
       return $http.get('/banks').then((res) => {
         var banks = res.data.banks.slice(30, 60);
         return banks;
       });
     };

     return {
       get,
     };
   }]);
