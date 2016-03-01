var app = angular.module('emailSubscriptionTestApp', []);

app.directive('emailSubscription', function(){

	var emailSubscriptionDirective = {
		restrict: 'E',
		scope: {
			email: "="	
		},

		controller : function($scope){
			$scope.hasSubscibed = false;

			$scope.subscribe = function(){
				$scope.hasSubscribed = true;
				console.log('Thank you subscribing, we will send email to ' + $scope.email);
			}
		},

		  template: '<input id="txtEmail" type="text" ng-model="email" /> ' +
        			'<input id="btnSubscribe" type="button" ng-click="subscribe()" />'
	};

	 return emailSubscriptionDirective;

});