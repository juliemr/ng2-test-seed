import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import { provide } from 'angular2/core';
import { UserService } from '../app/user-service';
import { LoginService } from '../app/login-service';



describe('user service', () => {
  beforeEachProviders(() => [LoginService, UserService])

  it('should validate pins', inject([UserService], (service) => {
    service.pin = 12345;
    expect(service.isValidPin()).toBe(false);

    service.pin = 0;
    expect(service.isValidPin()).toBe(true);

    service.pin = 9999;
    expect(service.isValidPin()).toBe(true);

    service.pin = -50;
    expect(service.isValidPin()).toBe(false);
  }));

  it('should greet when pin is wrong', injectAsync([UserService], (service) => {
    service.pin = 9999;
    return service.getGreeting().then((greeting) => {
      expect(greeting).toEqual('Login failure!');
    });
  }), 3000);

  it('should greet when pin is right', injectAsync([UserService], (service) => {
    service.pin = 2015;
    return service.getGreeting().then((greeting) => {
      expect(greeting).toEqual('Welcome!');
    });
  }), 3000);
});

class MockLoginService extends LoginService {
  login(pin: number) {
    return Promise.resolve(true);
  }
}

describe('with mocked login', () => {
  beforeEachProviders(() => [provide(LoginService, {useClass: MockLoginService}), UserService]);

  it('should greet', injectAsync([UserService], (service) => {
    return service.getGreeting().then((greeting) => {
      expect(greeting).toEqual('Welcome!');
    });
  }));
});

describe('with fake async', () => {
  beforeEachProviders(() => [LoginService, UserService]);

  it('should greet (with fakeAsync)', inject([UserService], fakeAsync((service) => {
    var greeting;
    service.getGreeting().then((value) => {
      greeting = value;
    });

    tick(2000);
    expect(greeting).toEqual('Login failure!');
  })));
});
