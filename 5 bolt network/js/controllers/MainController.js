app.controller('MainController', ['$scope', function($scope) {
  $scope.programa ={
		serie: "Sherlock",
		serie_img: "img/sherlock.jpg",
		genero: "Crime drama",
		temporada: 3,
		episodio: "The Empty Hearse",
		descripcion: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
		fecha: new Date(2014, 11, 31, 21)
	};
}]);