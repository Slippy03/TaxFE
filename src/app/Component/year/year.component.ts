import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-year',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {

  years: number[] = [];
  selectedYear: number | null = null;

  constructor(private taxService: TaxService) {
    const thisYear = new Date().getFullYear();
    for (let y = 2020; y <= thisYear; y++) {
      this.years.push(y);
    }

    this.taxService.year$.subscribe(y => {
      if (y !== null) {
        this.selectedYear = y;
      }
    });
  }

  onYearChange() {
    if (this.selectedYear !== null) {
      this.taxService.setYear(this.selectedYear);
    }
  }
}
