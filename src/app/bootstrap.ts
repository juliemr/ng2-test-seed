import {bootstrap} from 'angular2/platform/browser';

import {AppComponent} from './app-component';
import {LoginService} from './login-service';
import {UserService} from './user-service';

bootstrap(AppComponent, [LoginService, UserService]);