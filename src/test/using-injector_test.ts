import {
  it,
  describe,
  expect,
  inject
} from 'angular2/testing';
import {
  APP_ID
} from 'angular2/core';


describe('default test injector', () => {
  it('should provide default id', inject([APP_ID], (id) => {
    expect(id).toBe('a');
  }));
});
