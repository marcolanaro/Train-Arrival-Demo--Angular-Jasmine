'use strict';

describe('Service: myData', function () {

  // load the service's module
  beforeEach(module('ttlEngineeringApp'));

  // instantiate service
  var myData;
  beforeEach(inject(function (_myData_) {
    myData = _myData_;
  }));

  it('should do something', function () {
    expect(!!myData).toBe(true);
  });

  it('should contain an object', function () {
    expect(!!myData.get()).toBe(true);
  });

  it('should contain depart from London Euston', function () {
    expect(myData.get().journey.origin).toBe('London Euston');
  });

  it('should contain 5 points', function () {
    expect(myData.get().callingPoints.length).toBe(5);
  });

});
