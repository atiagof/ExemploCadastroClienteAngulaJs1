var EditUsuarioController;

angular.module('mainAppGerenciador', []).controller('EditUsuarioController', function ($scope, $http) {

        $scope.Usuario = {};
        EditUsuarioController = $scope;

        $scope.submit = function () {
        $http.post('/api/usuario', $scope.Usuario)
          .success(function (data) {

              var myJsonString = JSON.stringify(data);

              var jsonArray = JSON.parse(JSON.stringify(data))
          });
        };
    });