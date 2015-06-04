'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ttlEngineeringApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should contain actual', function () {
    expect(scope.isActual({actual:'14:00'})).toBe(true);
    expect(scope.classActual({actual:'14:00'})).toBe('actual');
    expect(scope.classLate({actual:'14:00',scheduled:'15:25',expected:'15:35'})).toBe('');
  });

  it('should not contain actual', function () {
    expect(scope.isActual({scheduled:'14:00'})).toBe(false);
    expect(scope.classActual({})).toBe('notactual');
    expect(scope.classLate({scheduled:'15:25',expected:'15:35'})).toBe('minutesLate');
  });

  it('should be in late', function () {
    expect(scope.isLate({scheduled:'15:25',expected:'15:35'})).toBe(true);
    expect(scope.classLate({scheduled:'15:25',expected:'15:35'})).toBe('minutesLate');
  });

  it('should be in time', function () {
    expect(scope.isLate({scheduled:'14:00',expected:'14:00'})).toBe(false);
    expect(scope.classLate({scheduled:'14:00',expected:'14:00'})).toBe('');
  });

  it('should return platform', function () {
    expect(scope.getPlatform({platform:'2'})).toBe('2');
  });

  it('should not return platform', function () {
    expect(scope.getPlatform({})).toBe('-');
    expect(scope.getPlatform({platform:''})).toBe('-');
  });

  it('should return 10 minutes', function () {
    expect(scope.timediff({scheduled:'15:25',expected:'15:35'})).toBe(10);
  });

  it('should return -10 minutes', function () {
    expect(scope.timediff({scheduled:'15:35',expected:'15:25'})).toBe(-10);
  });

  it('should return 0 minutes', function () {
    expect(scope.timediff({scheduled:'15:00',expected:'15:00'})).toBe(0);
  });

  it('should return false', function () {
    expect(scope.timediff({scheduled:'15',expected:'15'})).toBe(false);
  });

  it('should already passed two stations', function () {
    expect(scope.getLastActual([{actual:'14:00'},{actual:'15:35'},{}])).toBe(1);
  });

  it('should not be started', function () {
    expect(scope.getLastActual([{},{},{}])).toBe(false);
  });

});
