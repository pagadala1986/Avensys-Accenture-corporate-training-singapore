import { CustomLoopDirective } from './custom-loop.directive';
import {TemplateRef,ViewContainerRef} from '@angular/core'


describe('CustomLoopDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomLoopDirective(TemplateRef<any>,ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
