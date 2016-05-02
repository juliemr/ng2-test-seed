import {LoginService} from './login-service';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  pin: number = 1234;

  constructor(private _loginService: LoginService) {
  }

  isValidPin() {
    return (this.pin >= 0 && this.pin < 10000);
  }

  getGreeting() {
    return this._loginService.login(this.pin).then((success) => {
      return success ? 'Welcome!': 'Login failure!';
    });
  }
}
