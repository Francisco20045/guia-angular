var app = angular.module('AppLogin', []);

app.controller('ctrlLogin', function($scope)
{    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;

    $scope.iniciarSesion = function(){

        if( $scope.modelUsuario == "admin" &&  $scope.modelPassword=="123456" ){
            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
        }else{
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
        }
        
    };
});
