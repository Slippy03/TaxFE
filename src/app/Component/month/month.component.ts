import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxService } from '../../Service/tax.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-month',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  selectedMonth: number | null = null;
  currentMonth = new Date().getMonth() + 1;

  constructor(private taxService: TaxService) {
    this.taxService.month$.subscribe(m => this.selectedMonth = m);
  }

  onMonthChange() {
    if (this.selectedMonth !== null) {
      this.taxService.setMonth(this.selectedMonth);
    }
  }
}
