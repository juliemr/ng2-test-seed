import {
  async,
  inject,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';
import { Component, Type } from '@angular/core';
import { BorderComponent } from '../app/border-component';


function testInContainer(template: string, callback: (fixture) => any) {
  @Component({ template, directives: [BorderComponent] })
  class TestComponent {};
  return async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(TestComponent).then(callback);
  }));
}

describe('greeting component', () => {

  it('should wrap content', testInContainer('<my-fancy-border>Content</my-fancy-border>', (fixture) => {
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;

    expect(compiled).toContainText('Content');
  }));


  it('should include a title', testInContainer('<my-fancy-border title="ABC"></my-fancy-border>', (fixture) => {
    fixture.detectChanges();
    var compiled = fixture.debugElement.nativeElement;

    expect(compiled).toContainText('ABC');
  }));
});
