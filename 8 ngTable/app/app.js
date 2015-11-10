(function(){
    angular.module('mainApp', ['ngRoute', 'ngTable'])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/tabla.html',
                        controller: 'mainController',
                        controllerAs: 'vm'
                    });
            }]);
})();
