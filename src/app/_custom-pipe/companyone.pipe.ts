import {Pipe, PipeTransform} from '@angular/core';
import {Company} from './company';
@Pipe({
    name: 'companyone'
})
export class CompanyOnePipe implements PipeTransform {
  transform(obj: Company): string {
    console.log('I am pure');
    let output = obj.cname+' : '+ obj.location;
    return output;
  }
}
