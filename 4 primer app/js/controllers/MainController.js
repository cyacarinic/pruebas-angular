app.controller('MainController',
	['$scope', function($scope){
		$scope.title = "Los más Vendidos";
		$scope.promo = "The books of Trees & Program or be Programmed";
		$scope.productos = [
				{
					nombre: 'Milagros Benito Neyra',
					precio: 19,
					publicacion: new Date('1989', '00', '10'),
					cover: 'img/the-book-of-trees.jpg',
					likes:0,
					dislikes:0
				},
				{
					nombre: 'Claudio Yacarini Chiroque',
					precio: 8,
					publicacion: new Date('1989', '10', '16'),
					cover: 'img/program-or-be-programmed.jpg',
					likes:0,
					dislikes:0
				}
			];
		$scope.plusOne = function(index){
			$scope.productos[index].likes += 1;
		};
		$scope.minusOne = function(index){
			$scope.productos[index].dislikes += 1;
		};
	}]
);