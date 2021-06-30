import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {
  transform(value: any): string {

    let message = "Welcome to " + value.firstname+" "+value.lastname;
    return message;
  }
}
