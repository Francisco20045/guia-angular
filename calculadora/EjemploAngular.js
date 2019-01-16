var app = angular.module('AppCalculadora', []);

app.controller('ctrlEjemplo', function($scope)
{
    $scope.numeroUno = 0;
    $scope.numeroDos  = 0;

    $scope.sumar = function(){
        $scope.resultado = $scope.numeroUno + $scope.numeroDos;
    }
});

