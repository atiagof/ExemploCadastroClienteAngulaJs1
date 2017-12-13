angular.module('mainAppGerenciador').controller('EditCampoController', function ($scope, $http, $sce, $cookies, $location, $window, baseURL, FuncoesGerais)
{
    $scope.CAMPO = {};
    $scope.CAMPO.Id = "";
    $scope.CAMPO.Nome = "";
    $scope.CAMPO.Ativo = false;
    $scope.ListaCampos = {};
   
    $scope.gridCampos = {
        columnDefs: [
            { name: "Id", displayName: 'Id', maxWidth: 100 },
            { name: "Nome", displayName: 'Nome', minWidth: 350 },
            { name: "Ativo", displayName: 'Ativo', minWidth: 50, visible: false },
            {
                name: "EDITAR", displayName: 'EDITAR', enableCellEdit: false, minWidth: 60, maxWidth: 80, enableFiltering: false,
                cellTemplate: '<div style="text-align: center; padding: 5px 0 5px 0;"><button type="button" class="btn fa fa-edit bg-yellow" ng-click="grid.appScope.Edit(row.entity)"></button></div>'
            },
            {
                name: "DELETAR", displayName: 'APAGAR', enableCellEdit: false, minWidth: 60, maxWidth: 80, enableFiltering: false,
                cellTemplate: '<div style="text-align: center; padding: 5px 0 5px 0;"><button type="button" class="btn fa fa-minus bg-red" ng-click="grid.appScope.KeepDel(row.entity)" data-toggle="modal" data-target="#modalDeletar" ></button></div>'
            },

        ],

        enableFiltering: true,
        enableColumnMenus: false,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: true,
        height: 500
    };

    $scope.pesquisaCampo = function () {
        var Id = FuncoesGerais.ObterValorQS('Id');
        $cookies.put('idCampo', Id );
        if (Id == "")
            $scope.CAMPO = {};
        else {
            var serv = baseURL + 'api/Campos/pesquisaCampo?Id=' + Id;
            var met = 'GET';
            var head = { 'Content-Type': 'application/json' };

            $http({ method: met, url: serv, headers: head })
            .then(
                function successCallback(response) {
                    $scope.CAMPO.Id = response.data.ID;
                    $scope.CAMPO.Nome = response.data.Nome;

                    $cookies.put('idCampo', $scope.CAMPO.Id);
                }
                , function errorCallback(response) {
                    var retorno = response.data;
                    var msg = '';
                    if (response.data.ModelState == null)
                    { msg = response.data.Message; }
                    else
                    { msg = response.data.ModelState["RestricaoCampo"]; }

                    $.notify({
                        message: msg
                    }, {
                        type: 'error'
                    });
                });
        }
    }

    $scope.Edit = function (row) {
        $scope.CAMPO = {
            Id: row.Id
            , Nome: row.Nome
        };
        $scope.Tipo = 1;
    };


	$scope.salvaCampo = function () {

	    $scope.$broadcast('show-errors-check-validity');//FAzer Broaddcast de erros
	    $scope.showErrorsCheckValidity = true;

	    var Id = $scope.CAMPO.Id;
	    if (Id == "" || Id == undefined) {
	        var serv = baseURL + 'api/Campos/salvaCampo/Id';
	    }
	    else {
	        var serv = baseURL + 'api/Campos/editaCampo/Id';
	    }
	    var dados = JSON.stringify($scope.CAMPO);
	    var met = 'POST';
	    var head = { 'Content-Type': 'application/json; charset=uft-8' };

	    try {

	        if ($scope.frmCampo.$invalid) { return; }

	        $http({ method: met, url: serv, headers: head, data: dados })
            .then(
                function successCallback(response) {
                    $scope.CAMPO = response.data;
                    $scope.listaCampos();
                    $scope.limpaDados();
                    $.notify({
                        message: 'Dados gravados com sucesso.'
                    }, {
                        type: 'success'
                    });

                }
                , function errorCallback(response) {
                    var msg = '';
                    if (response.data.ModelState == null)
                    { msg = response.data.Message; }
                    else
                    { msg = response.data.ModelState["RestricaoCampo"]; }

                    $.notify({
                        message: msg
                    }, {
                        type: 'error'
                    });
                });

	    }
	    catch (err) {
	        return err.message;
	    }
	}

	$scope.reset = function () {
	    $scope.$broadcast('show-errors-reset');
	}

	$scope.ToDel = {};
	$scope.KeepDel = function (row) {
	    $scope.ToDel = row;
	    $scope.Nome = row.NOME;
	}
	$scope.Del = function () {
	    $scope.apagaCampo($scope.ToDel.Id)
	    var dados = $scope.gridCampos.data;
	    for (var i = 0; i < dados.length; i++) {
	        if (dados[i].Id == $scope.ToDel.Id) {
	            dados.splice(i, 1);
	            break;
	        }
	    }
	};

	$scope.apagaCampo = function(Id) {
	    var serv = baseURL + 'api/Campos/apagaCampo?Id=' + Id;

	    var dados = JSON.stringify($scope.CAMPO);
	    var met = 'POST';
	    var head = { 'Content-Type': 'application/json' };

	    try {

	        if (Id != "")
            {
	            $http({ method: met, url: serv, headers: head, data: dados })
                .then(
                    function successCallback(response) {
                        $scope.listaCampos();
                        $scope.limpaDados();
                        $.notify({
                            message: 'Dados removidos com sucesso.'
                        }, {
                            type: 'success'
                        });
                    }
                    , function errorCallback(response) {
                        var retorno = response.data;
                        var msg = '';
                        if (response.data.ModelState == null)
                        { msg = response.data.Message; }
                        else
                        { msg = response.data.ModelState["RestricaoCampo"]; }

                        $.notify({
                            message: msg
                        }, {
                            type: 'error'
                        });
                    });
	        }
	        else {
	            $.notify({
	                message: 'Preencha os campos indicados.'
	            }, {
	                type: 'error'
	            });

	        }
	    }
	    catch (err) {
	        return err.message;
	    }
	}

	//$scope.apagaCampo = function () {
	//    $window.location.href = 'api/Campos/apagaCampo?Id=' + ;
	//}

	$scope.listaCampos = function () {
	    var serv = baseURL + 'api/Campos/listaCampos/Id';
	    var met = 'GET';
	    var head = { 'Content-Type': 'application/json; charset=uft-8' };

	    try {

	    $http({ method: met, url: serv, headers: head })
        .then(
            function successCallback(response) {
                var resultado = [];

                angular.forEach(response.data, function (dado) {

                    resultado.push({
                        Id: dado.Id, Nome: dado.Nome
                    })
                })
                $scope.gridCampos.data = resultado;
            }
            , function errorCallback(response) {
                var retorno = response.data;
                var msg = '';
                if (response.data.ModelState == null)
                { msg = response.data.Message; }
                else
                { msg = response.data.ModelState["RestricaoCampo"]; }

                $.notify({
                    message: msg
                }, {
                    type: 'error'
                });
            });
	    }
	    catch (err) {
	        return err.message;
	    }
	};

	$scope.limpaDados = function () {
	    $scope.CAMPO = {};
	    $cookies.put('idCampo', "");
	}

	$scope.carrega = function () {

	    $scope.listaCampos();

	    if (FuncoesGerais.ObterValorQS('Id') != undefined)
	    {
	        $scope.pesquisaCampo();
	    }
	}

	$scope.carrega();
    
});


