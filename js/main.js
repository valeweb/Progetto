var listaDellaSpesa = angular.module('listApp', []);
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
