// https: //docs.meteor.com/api/packagejs.html
// https: //guide.meteor.com/writing-atmosphere-packages.html

Package.describe({
  version: '0.0.1',
  summary: 'The doctor',
  name: 'doctor',
  git: 'https://github.com/boostbob/doctor.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.8.0.1');

  // add dependencies
  // api.use(['check', 'other']);

  // 导出模块的写法
  // api.use('ecmascript');
  // api.mainModule('doctor.js');

  // 导出全局的写法
  api.export('Doctor', 'server');

  // add the files without modification
  api.addAssets('companions/rose.json', 'server');
  api.addAssets('companions/martha.json', 'server');

  // doctor.js will load the JSON files for us using Assets.getText
  api.addFiles('doctor.js', 'server');
});

// npm dependencies
// tmeasday:check-npm-versions
Npm.depends({
  // github: '0.2.4'
  // import github from 'github';
});

// meteor test-packages ./ --driver-package meteortesting:mocha
// https://guide.meteor.com/testing.html
Package.onTest(function (api) {
  api.use('doctor');

  // dependencies
  api.use(['ecmascript', 'meteortesting:mocha']);

  // define entrypoint
  api.mainModule('doctor-tests.js');
});