import { Component } from '@angular/core';
import { ThDatePipe } from '../../pipe/th-date.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ThDatePipe ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {
currentDate = new Date();
  public timer : any;
  intervalId: any;
  
  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy() {
  }
  
}
