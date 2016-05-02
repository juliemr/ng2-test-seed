import {bootstrap} from '@angular/platform-browser-dynamic';
import {UserService} from './user-service';
import {AppComponent} from './app-component';
import {LoginService} from './login-service';


bootstrap(AppComponent, [LoginService, UserService]);
