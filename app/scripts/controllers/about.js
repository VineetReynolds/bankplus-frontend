'use strict';

/**
 * @ngdoc function
 * @name bankPlusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bankPlusApp
 */
angular.module('bankPlusApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
