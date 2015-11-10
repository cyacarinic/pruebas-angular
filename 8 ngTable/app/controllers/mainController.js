(function() {
    var depList = ['$scope', '$http', 'NgTableParams'];
    var mainController = function($scope, $http, NgTableParams) {

        // $scope.lista_gente = [];
        this.init = function() {
                var self = this;
                var gente = [
                    {nombre: "Pancho", edad: 87},
                    {nombre: "Claudio", edad: 25},
                    {nombre: "Yvan", edad: 56},
                    {nombre: "Luz", edad: 55},
                    {nombre: "Fiama", edad: 21},
                    {nombre: "Byron", edad: 6},
                    {nombre: "Cri", edad: 86}
                ];
                // $scope.lista_gente = gente;
                self.tableParams = new NgTableParams({ count: 5}, { counts: [5, 10, 25], dataset: gente});
        };
        this.init();
    };
    mainController.$inject = depList;
    angular.module('mainApp').controller('mainController', mainController);
})();
