import {provide} from 'angular2/core';
import {
	beforeEachProviders,
	describe,
	expect,
	fakeAsync,
	inject,
	injectAsync,
	it,
	tick
} from 'angular2/testing';

import {UserService} from '../app/user-service';
import {LoginService} from '../app/login-service';



describe('user service', () => {
	beforeEachProviders(() => [LoginService, UserService])

	it('should validate pins', inject([UserService], (service: UserService) => {
		service.pin = 12345;
		expect(service.isValidPin()).toBe(false);

		service.pin = 0;
		expect(service.isValidPin()).toBe(true);

		service.pin = 9999;
		expect(service.isValidPin()).toBe(true);

		service.pin = -50;
		expect(service.isValidPin()).toBe(false);
	}));

	it('should greet when pin is wrong', injectAsync([UserService], (service: UserService) => {
		service.pin = 9999;
		return service.getGreeting().then((greeting) => {
			expect(greeting).toEqual('Login failure!');
		});
	}), 3000);

	it('should greet when pin is right', injectAsync([UserService], (service: UserService) => {
		service.pin = 2015;
		return service.getGreeting().then((greeting) => {
			expect(greeting).toEqual('Welcome!');
		});
	}), 3000);
});

class MockLoginService implements LoginService {
	public login(pin: number): Promise<boolean> {
		return Promise.resolve(true);
	}
}

describe('with mocked login', () => {
	beforeEachProviders(() => [provide(LoginService, { useClass: MockLoginService }), UserService]);

	it('should greet', injectAsync([UserService], (service: UserService) => {
		return service.getGreeting().then((greeting) => {
			expect(greeting).toEqual('Welcome!');
		});
	}));
});

describe('with fake async', () => {
	beforeEachProviders(() => [LoginService, UserService]);

	it('should greet (with fakeAsync)', inject([UserService], fakeAsync((service: UserService) => {
		let greeting: string;
		service.getGreeting().then((value) => {
			greeting = value;
		});

		tick(2000);
		expect(greeting).toEqual('Login failure!');
	})));
});
