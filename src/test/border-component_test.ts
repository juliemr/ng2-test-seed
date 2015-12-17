import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import { Component } from 'angular2/core';
import { BorderComponent } from '../app/border-component';

@Component({
  template: '',
  directives: [BorderComponent]
})
class TestComponent {
}

describe('greeting component', () => {
  it('should wrap content', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<my-fancy-border>Content</my-fancy-border>')
        .createAsync(TestComponent).then((fixture) => {
          fixture.detectChanges();
          var compiled = fixture.debugElement.nativeElement;

          expect(compiled).toContainText('Content');
        });
  }));

  it('should include a title', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<my-fancy-border title="ABC"></my-fancy-border>')
        .createAsync(TestComponent).then((fixture) => {
          fixture.detectChanges();
          var compiled = fixture.debugElement.nativeElement;

          expect(compiled).toContainText('ABC');
        });
  }));
});
