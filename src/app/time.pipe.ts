import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): string {
    const dayInSeconds = 86400;
    let today:Date = new Date();
    let todayWithoutTime:any = new Date (today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayWithoutTime - value);
    var dateDifferenceSeconds = dateDifference*0.001;
    var daysCount = dateDifferenceSeconds/dayInSeconds; // number of days
    var days = `${daysCount} days ago`;
    var monthsCount = Math.round(daysCount/30);
    var months = `${monthsCount} months ago`;
    var yearsCount = Math.round(monthsCount/12);
    var years = `${yearsCount} years ago`;

    if(value <= today){
      if (daysCount < 30){
        return days;
      }else if (daysCount >= 30){
        if (daysCount <= 365){
          return months;
        } else{
          return years;
        }
      }
    }else{
      return ``;
    }
  }

}
