(function () {
    'use strict';

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('Main', {
                    url: '/',
                    templateUrl: 'templates/main.view.html',
                    controller: 'MainController'
                })
        })

})();