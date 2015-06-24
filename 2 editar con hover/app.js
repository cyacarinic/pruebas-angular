angular.module('Demo', []).directive('editable', ['$parse', function ($parse) {
	return {
		restrict: 'E',
		scope: {
			value: '@',
			onChange: '&'
		},
		template: '<span ng-class="{editing: editing}" >{{ value }}</span>' +
			'<input ng-click="editing=true" ng-class="{editing: editing}" ' +
			'type="text" ng-model="value" />',
 
		link: function (scope, element, attributes) {
			// set the old value first time when its linked, this value is then
			// updated inside the apply
			var oldValue = attributes.value;
 
			var changedCallback = function () {
				scope.$apply(function () {
					scope.editing = false;
					if(scope.value !== oldValue) {
						$parse(attributes.onChange)(scope.$parent);
						oldValue = scope.value;
					}
				})
			};
 
			element.find('input').
			on('blur', changedCallback).
			on('keyup', function (event) {
				// enter also triggers a callback
				if(event.keyCode === 13) {
					changedCallback();
				}
			});
		}
	}
}]);