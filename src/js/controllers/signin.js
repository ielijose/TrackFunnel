'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', 'ngAuthSettings', function ($scope, $http, $state, ngAuthSettings) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      debugger;
      $scope.authError = null;
      // Try to login
      $http.get(ngAuthSettings.apiServiceBaseUri+'login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        alert(JSON.stringify(response));
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.funnels');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;