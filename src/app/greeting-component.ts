import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {UserService} from './user-service';

@Component({
  selector: 'my-greeting',
  template: `
    <input [(ngModel)]="user.pin" placeholder="1111" type=number>
    <button (click)="enter()">Enter</button>
    <h3>Status: {{greeting}}</h3>
  `,
  styles :[`
    input {font-family: monospace; font-size: 2em; width: 4em}
    button {border: 2px solid; height: 2em}
  `],
  directives: [FORM_DIRECTIVES]
})
export class GreetingComponent {
  greeting: string = 'Enter PIN';
  pending: Promise<any>;

  constructor(public user: UserService) {
  }

  enter() {
    this.greeting = 'Processing...';
    this.pending = this.user.getGreeting().then((greeting) => {
      this.greeting = greeting;
    });
  }
}
