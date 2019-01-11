var app = angular.module('AppLogin', []);

app.controller('ctrlEjemplo', function($scope)
{
    $scope.usuario = "";
    $scope.saludo  = "";

    $scope.decirHola = function(){
        $scope.saludo = "Hola, " +  $scope.usuario;
    }
});

