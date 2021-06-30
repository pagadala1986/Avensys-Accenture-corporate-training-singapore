import {Pipe, PipeTransform} from '@angular/core';
import {Company} from './company';
@Pipe({
  name: 'companytwo',
	pure: false
})
export class CompanyTwoPipe implements PipeTransform {
  transform(obj: Company): string {
    console.log('I am impure');
    let output = obj.cname+' : '+ obj.location;
    return output;
  }
}
