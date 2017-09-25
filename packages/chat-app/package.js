Package.describe({
  name: 'chat-app:chat-app',
  version: '0.0.1',
  summary: 'Sample Chat App',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('chat-app.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chat-app:chat-app');
  api.addFiles('chat-app-tests.js');
});
