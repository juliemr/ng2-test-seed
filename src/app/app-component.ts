import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-fancy-border title="The PIN Machine">
      <my-greeting></my-greeting>
    </my-fancy-border>
  `,
})
export class AppComponent {
}
