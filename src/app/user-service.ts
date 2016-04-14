import {Injectable} from 'angular2/core';

import {LoginService} from './login-service';

@Injectable()
export class UserService {
	public pin: number = 1234;

	constructor(private loginService: LoginService) { }

	public isValidPin(): boolean {
		return this.pin >= 0
			&& this.pin < 10000;
	}

	public getGreeting(): Promise<string> {
		return this.loginService.login(this.pin).then((success) => {
			return success ? 'Welcome!' : 'Login failure!';
		});
	}
}