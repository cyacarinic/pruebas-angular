app.directive('game',function(){
  return {
    restrict:'E',
    scope:{
      info:'='
    },
    templateUrl = 'js/directives/Game.html'
  };
});
