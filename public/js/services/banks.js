angular
  .module('offlineFirst')
  .factory('BanksService', ['$http', function($http) {
     var banks = [];
     var get = function() {
       return $http.get('/banks');
     };

     return {
       get,
     };
   }]);
