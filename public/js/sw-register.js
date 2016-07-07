(function() {
  console.log('asdasd');
  if (!navigator.serviceWorker)
    return;

  navigator.serviceWorker.register('./../sw.js').then(function(registration) {
    console.log('Registration worked!', registration.scope);
  }).catch(function(e) {
    console.log('Service Woker registration failed!', e);
  });
})();
