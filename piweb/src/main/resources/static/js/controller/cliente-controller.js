appCliente.controller("clienteController", function($scope, $http) {
	
	$scope.nome = "jão";
	$scope.clientes = [];
	$scope.cliente = {};
	
	$scope.carregarClientes = function() {
		$http({method:'GET', url:'http://localhost:8080/clientes'}).then(
			function(response){
				$scope.clientes = response.data;
			}, 
			function(response){
				console.log(response.data);
				console.log(response.status);
			}
		);
	}
	
	$scope.salvarCliente = function () {
		$http({method:'POST', url:'http://localhost:8080/clientes', data: $scope.cliente}).then(
			function(response){
				$scope.carregarClientes();
				$scope.cancelar();
			}, 
			function(response){
				console.log(response.data);
				console.log(response.status);
			}
		);
	}
	
	$scope.removerCliente = function (cliente) {
		$http({method:'DELETE', url:'http://localhost:8080/clientes/'+ cliente.id}).then(
				function(response){
					pos = $scope.clientes.indexOf(cliente);
					$scope.clientes.splice(pos, 1);
				}, 
				function(response){
					console.log(response.data);
					console.log(response.status);
				}
		);
	}
	
	$scope.alterarCliente = function (cliente) {
		$scope.cliente = angular.copy(cliente);
	}
	
	$scope.cancelar = function () {
		$scope.cliente = {};
	}
	
	$scope.carregarClientes();
	
});