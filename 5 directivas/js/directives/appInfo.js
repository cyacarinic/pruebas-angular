// "app" es la variable asignada para "AppMarketApp" y "appInfo" la directiva
// que estaremos creando en angular. restrict puede ser "A", "E" o "C" según sea
// usado como "atributo", "elemento" o "clase" en nuestro html. "info" es la
// variable por parámetro (<app-info info="move"></app-info>). "templateUrl"
// es el include. Se crean directivas xq ayudan a que el código sea legible y
// para poder reusar codigo || funciones || vistas

app.directive('appInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appInfo.html'
  };
});
