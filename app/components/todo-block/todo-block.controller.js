function controller($scope) {
	$scope.$watch('bgcolor', () => {
		this.style = {
			'border': `1px solid ${ $scope.bgcolor }`
		}
	});
}

export default [
	'$scope', 
	controller
];