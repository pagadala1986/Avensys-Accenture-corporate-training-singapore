import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): string {
    let result;
    if(typeof value=='string'){
      let dateArr = value.split(' ');
      result = 'Today is '+dateArr[2]+' '+dateArr[1]+' '+dateArr[3]
    }else{
      result = 'Today is '+value.getDate()+' '+this.getMonthName(value.getMonth()) +' '+value.getFullYear()
    }
    return result;
  }

  getMonthName(mNum){
    switch(mNum){
      case 0: return 'JAN';break;
      case 1: return 'FEB';break;
      case 2: return 'MAR';break;
      case 3: return 'APR';break;
      case 4: return 'MAY';break;
      case 5: return 'JUN';break;
      case 6: return 'JUL';break;
      default: return 'AUG';break;
    }
  }


}
