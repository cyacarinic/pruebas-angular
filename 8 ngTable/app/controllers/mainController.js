(function() {
    var depList = ['$scope', '$http', 'NgTableParams'];
    var mainController = function($scope, $http, NgTableParams) {
        this.init = function() {
                var self = this;
                var data = [{name: "Moroni", age: 50},
                    {name: "Simon", age: 43},
                    {name: "Jacob", age: 27},
                    {name: "Nephi", age: 29},
                    {name: "Christian", age: 34},
                    {name: "Tiancum", age: 43},
                    {name: "Jacob", age: 27}
                ];
                self.tableParams = new NgTableParams({ count: 5}, { counts: [5, 10, 25], dataset: data});
                // $http.get(BASE_API+'/posts?categoria='+categoria_slug)
                //     .success(function(data) {
                //     	var posts = [];
                //     		for(var i = 0; i < data.length; i++ ){
                //     			var post = {
                //     				tipo:data[i].tipo,
                //                     destacada:data[i].destacada,
                //                     autor:data[i].autor,
                //                     fecha:data[i].fecha,
                //                     titulo:data[i].titulo,
                //                     guid:data[i].guid,
                //     			};
                //     			posts.push(post);
                //     		}
                //     	$scope.lista_posts = posts;
                //     })
                //     .error(function(data) {
                //         console.log('error: ', data);
                //     });
        };
        this.init();
    };
    mainController.$inject = depList;
    angular.module('mainApp').controller('mainController', mainController);
    // angular.module('adminApp').config(['$httpProvider', function($httpProvider) {
    //     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    //     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // }]);
})();
