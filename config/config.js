var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'offline-apps',
    },
    port: 3000,
    openBanka: {
      host: 'https://apisandbox.openbankproject.com/obp/v1.4.0',
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'offline-apps',
    },
    port: 3000,
    openBanka: {
      host: 'https://apisandbox.openbankproject.com/obp/v1.4.0',
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'offline-apps',
    },
    port: 3000,
    openBanka: {
      host: 'https://apisandbox.openbankproject.com/obp/v1.4.0',
    }
  },
};

module.exports = config[env];
