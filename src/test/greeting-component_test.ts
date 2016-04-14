import {provide} from 'angular2/core';
import {
	beforeEachProviders,
	ComponentFixture,
	describe,
	expect,
	fakeAsync,
	inject,
	injectAsync,
	it,
	TestComponentBuilder,
	tick
} from 'angular2/testing';

import {UserService} from '../app/user-service';
import {LoginService} from '../app/login-service';
import {GreetingComponent} from '../app/greeting-component';



class MockLoginService implements LoginService {
	public login(pin: number): Promise<boolean> {
		return Promise.resolve(true);
	}
}

describe('greeting component', () => {
	beforeEachProviders(() => [
		provide(LoginService, { useClass: MockLoginService }),
		UserService,
		TestComponentBuilder
	]);

	it('should ask for PIN', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(GreetingComponent).then((fixture) => {
			fixture.detectChanges();
			let compiled = fixture.nativeElement;

			expect(compiled).toContainText('Enter PIN');
			expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
		});
	}));

	it('should change greeting', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(GreetingComponent).then((fixture) => {
			fixture.detectChanges();
			(<GreetingComponent>fixture.componentInstance).greeting = "Foobar";
			fixture.detectChanges();

			let compiled = fixture.nativeElement;

			expect(compiled.querySelector('h3')).toHaveText('Status: Foobar');
		});
	}));

	it('should override the template', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb
			.overrideTemplate(GreetingComponent, `<span>{{greeting}}<span>`)
			.createAsync(GreetingComponent)
			.then((fixture) => {
				fixture.detectChanges();

				let compiled = fixture.nativeElement;

				expect(compiled).toHaveText('Enter PIN');
			});
	}));

	it('should accept pin', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		return tcb.createAsync(GreetingComponent).then((fixture) => {
			fixture.detectChanges();

			let compiled = fixture.nativeElement;
			compiled.querySelector('button').click();

			return fixture.componentInstance.pending.then(() => {
				fixture.detectChanges();
				expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
			});
		});
	}));

	it('should accept pin (with fakeAsync)', inject([TestComponentBuilder], fakeAsync((tcb: TestComponentBuilder) => {
		let fixture: ComponentFixture;
		tcb.createAsync(GreetingComponent).then((rootFixture) => {
			fixture = rootFixture;
		});

		tick();

		let compiled = fixture.nativeElement;
		compiled.querySelector('button').click();
		tick();
		fixture.detectChanges();

		expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
	})));
});