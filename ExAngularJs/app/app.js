'use strict';

angular.module('Autenticacao', []);

angular.module('modConfig', [])
    .constant('baseURL', 'http://localhost:11596/')
    .constant('caminhoImagens', '/ImagensPortal/')
    .constant('nonWord', '/\W/g')

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'mainAppGerenciador',
    'ngRoute',
    'ngCookies'
])
//'angular-underscore', 
angular.module('mainAppGerenciador', ['ngSanitize', 'ngCookies', 'modConfig', 'angular-icheck', 'ui.bootstrap', 'ui.grid', 'angular-formvalidation', 'canvas-thumbnail'])
.service('FuncoesGerais', function ($http) {
    this.ObterValorQS = function (param, dummyPath) {
        var sPageURL = dummyPath || window.location.search.substring(1),
    sURLVariables = sPageURL.split(/[&||?]/),
    res;

        for (var i = 0; i < sURLVariables.length; i += 1) {
            var paramName = sURLVariables[i],
                sParameterName = (paramName || '').split('=');

            if (sParameterName[0] === param) {
                res = sParameterName[1];
            }
        }

        return res;
    }


    this.GetParameterValues = function (param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
})

