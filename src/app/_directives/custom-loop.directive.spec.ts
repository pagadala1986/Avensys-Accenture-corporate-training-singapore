import { CustomLoopDirective } from './custom-loop.directive';
import {TemplateRef,ViewContainerRef} from '@angular/core'


describe('CustomLoopDirective', () => {
  it('should create an instance', () => {
    let templateRef: TemplateRef<any>;
    let viewContainerRef: ViewContainerRef
    const directive = new CustomLoopDirective(templateRef,viewContainerRef
      );
    expect(directive).toBeTruthy();
  });
});
