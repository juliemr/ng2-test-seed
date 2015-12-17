import {bootstrap} from 'angular2/platform/browser';
import {UserService} from './user-service';
import {AppComponent} from './app-component';
import {LoginService} from './login-service';


bootstrap(AppComponent, [LoginService, UserService]);
