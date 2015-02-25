Package.describe({
  name: 'ox2:detective',
  summary: 'Compatibility detections',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export('ooTransitionEvent');
  api.addFiles('lib/oo-detective.js', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:detective');
  api.addFiles('tests/oo-detective-tests.js');
});
