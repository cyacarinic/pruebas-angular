// "app" se usara para hacer el llamado de la aplicación en otras instancias .js
// para declarar controladores o directivas
// (app.controller, app.directive)
// "AppMarketApp" se usará para iniciar la app en el html (<body ng-app="AppMarketApp">)

// Para mejor rendimiento usar "http-server" de Node.js

var app = angular.module('AppMarketApp', []);
