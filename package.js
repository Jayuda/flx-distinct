Package.describe({
  name: 'jayuda:flx-distinct',
  description: 'Distinct Meteor Mongo field like a SQL',
  summary: 'flx-distinct will agregate Collections with a specific field',
  version: '0.1.3',
  author: 'jayuda',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');
  api.addFiles('distinct.js', 'server');
  api.addFiles('distinct.js', 'client');
  api.export('flxDistinct', 'client');
  api.export('flxDistinct', 'server');
});
