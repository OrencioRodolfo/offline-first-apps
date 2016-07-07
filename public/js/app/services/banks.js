angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var banks = [];
     var get = function() {
       return $http.get('/banks').then((res) => {
         return res.data.banks.slice(30, 40);
       });
     };

     return {
       get,
     };
   }]);
