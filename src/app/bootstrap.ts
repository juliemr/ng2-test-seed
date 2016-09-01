import {NgModule} from '@angular/core';
import {UserService} from './user-service';
import {AppComponent} from './app-component';
import {LoginService} from './login-service';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {GreetingComponent} from './greeting-component';
import {BorderComponent} from './border-component';

@NgModule({
  declarations: [AppComponent, GreetingComponent, BorderComponent],
  providers: [LoginService, UserService],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class MyAppModule{}

platformBrowserDynamic().bootstrapModule(MyAppModule);
