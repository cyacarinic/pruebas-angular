// "app" es el nombre de la variable asignada para "AppMarketApp"
// "MainController" es el controlador que se asignara a una sección del html
// (<div class="main" ng-controller="MainController">)
// "$scope" indica el alcance del controlador (para definir variables, funciones)

app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };

  $scope.apps = [
    {
      icon:'img/move.jpg',
      title:'move',
      developer:'Move, Inc.',
      price:0.99
    },
    {
      icon:'img/shutterbugg.jpg',
      title:'Shutterbugg',
      developer:'Chico Dusty',
      price:2.99
    },
    {
      icon: 'img/gameboard.jpg',
      title: 'Gameboard',
      developer: 'Armando P.',
      price: 1.99
    },
    {
      icon: 'img/forecast.jpg',
      title: 'Forecast',
      developer: 'Forecast',
      price: 1.99
    }
  ];
}]);
