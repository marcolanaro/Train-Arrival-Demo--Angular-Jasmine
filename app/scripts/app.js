'use strict';

/**
 * @ngdoc overview
 * @name ttlEngineeringApp
 * @description
 * # ttlEngineeringApp
 *
 * Main module of the application.
 */
angular
  .module('ttlEngineeringApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
