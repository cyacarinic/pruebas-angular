// restrict, scope y templateUrl se vieron en la directiva 'appInfo'. 'link' se
// usa para hacer dar interactividad a la directiva y que responda a acciones
// del usuario. Link tiele 3 parámetros: 'scope' (alcance de la directiva),
// 'emelent' (elemento html de la directiva) y 'attrs' (atributos del elemento)

app.directive('installApp',function(){
  return {
    restrict:'E',
    scope:{},
    templateUrl:'js/directives/installApp.html',

    link:function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,
      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});
