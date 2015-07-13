var listaDellaSpesa = angular.module('listApp', ['ngRoute']);

listaDellaSpesa.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'index'
            }).
            when('/todo', {
                templateUrl: 'todo'
            }).
            when('/comprate', {
                templateUrl: 'comprate',
                controller: 'comprateCtrl'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);


listaDellaSpesa.controller('ListCtrl', ['$scope',function ListCtrl($scope) {
  $scope.lista = [
    {
      'nome' : 'Uova',
      'comprato' : true
    },
    {
      'nome' : 'Latte',
      'comprato' : false
    }
  ];
  $scope.aggiungi = function(){
    $scope.lista.push({
      'nome':document.getElementById("input_nome").value,
      'comprato':false
    });
  };
}]);

    listaDellaSpesa.controller('comprateCtrl', ['$scope',function comprateCtrl($scope) {
      $scope.cancella = function(){
        var arrayLength = $scope.$parent.lista.length;
        for(var i = 0;i < arrayLength;i++){
            if($scope.$parent.lista[i].comprato)
            {
                $scope.$parent.lista.splice(i,1);
            }
        }
      }
    }]);
