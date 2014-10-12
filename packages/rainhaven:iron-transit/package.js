Package.describe({
  summary: "A CSS3 Transition Plugin Package for Iron:Router",
  version: "0.0.1",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('iron:router@1.0.0-pre3');
  api.addFiles('rainhaven:iron-transit.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:iron-transit');
  api.addFiles('rainhaven:iron-transit-tests.js');
});
