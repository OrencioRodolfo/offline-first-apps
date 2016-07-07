angular
  .module('offlineFirst')
  .component('banksList', {
    templateUrl: 'templates/banks-listing.html',
    controller: ['BanksService', function PhoneListController(BanksService) {
      BanksService.get().then((banks) => {
        this.banks = banks;
      });
    }],
  });
