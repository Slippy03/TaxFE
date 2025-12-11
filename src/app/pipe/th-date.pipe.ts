import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thDate',
  standalone: true
  
})
export class ThDatePipe implements PipeTransform {

  transform(value:any, showTime: boolean = false): string {
    if (!value) return '';

    const date = new Date(value);

    const days = [
      'วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ',
      'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'
    ];

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    if (showTime) {
      const hour = this.padZero(date.getHours());
      const minute = this.padZero(date.getMinutes());
      const second = this.padZero(date.getSeconds());
      return `${dayName}ที่ ${day} ${monthName} ${year} เวลา ${hour}:${minute} น.`;
    } else {
      const hour = this.padZero(date.getHours());
      const minute = this.padZero(date.getMinutes());
      const second = this.padZero(date.getSeconds());
      return `${hour}:${minute} (GMT+7) | ${day} ${monthName} ${year}`;
    }
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
