var Dexie = require('dexie');

module.exports = function() {

  var db = new Dexie('Banks');
  db.version(1).stores({
    banks: '&id,short_name,full_name,logo,website',
  });

  function setBanks(docs) {
    return db.transaction('rw', db.banks, function () {
      return db.banks.bulkPut(docs);
    });
  };

  function getBanks() {
    return db.transaction('r', db.banks, function () {
      return db.banks.toArray();
    });
  }

  return {
    setBanks: setBanks,
    getBanks: getBanks,
  };
};
