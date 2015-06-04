'use strict';

/**
 * @ngdoc function
 * @name ttlEngineeringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ttlEngineeringApp
 */
angular.module('ttlEngineeringApp')
  .controller('MainCtrl', function ($scope, myData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var data = myData.get();
    $scope.callingPoints = data.callingPoints;
    $scope.journey = data.journey;

    $scope.isActual = function(point) {
      if (point.actual !== undefined) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isLate = function(point) {
      if (point.scheduled === point.expected) {
        return false;
      } else {
        return true;
      }
    };

    $scope.classActual = function(point) {
      if ($scope.isActual(point)) {
        return 'actual';
      } else {
        return 'notactual';
      }
    };

    $scope.classLate = function(point) {
      if (!$scope.isActual(point) && $scope.isLate(point)) {
        return 'minutesLate';
      } else {
        return '';
      }
    };

    $scope.late = function(point) {
      if ($scope.isLate(point)) {
        return '' + $scope.timediff(point) + ' min late';
      } else {
        return 'On time';
      }
    };

    $scope.timediff = function(point) {
      var sa = point.scheduled.split(':');
      var ea = point.expected.split(':');
      if (sa.length !== 2 || ea.length !== 2) {
        return false;
      }
      var scheduled = new Date(1986, 2, 25, parseInt(sa[0]), parseInt(sa[1]), 0, 0);
      var expected = new Date(1986, 2, 25, parseInt(ea[0]), parseInt(ea[1]), 0, 0);
      var diff = expected.getTime() - scheduled.getTime();
      return diff / 1000 / 60;
    };

    $scope.getPlatform = function(point) {
      if (point.platform === undefined || point.platform === '') {
        return '-';
      } else {
        return point.platform;
      }
    };

    $scope.getLastActual = function(points) {
      var i = -1;
      while (points[i + 1] && $scope.isActual(points[i + 1])) {
        i += 1;
      }
      if (i === -1) {
        return false;
      } else {
        return i;
      }
    };

  });
