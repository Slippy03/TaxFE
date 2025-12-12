import { Component, OnInit } from '@angular/core';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css',
})
export class TotalAmountComponent implements OnInit {
  totalAmount: string = '0.00';
  taxAmount = 0;
  surcharge = 0;
  penalty = 0;
  filingType: string = '0';

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.taxService.filingType$.subscribe((type) => {
      this.filingType = type;
      this.calculateTotal();
    });

    this.taxService.saleAmount$.subscribe((value) => {
      const num = parseFloat(value?.replace(/,/g, '')) || 0;
      this.taxAmount = parseFloat((num * 0.07).toFixed(2));
      this.calculateTotal();
    });

    this.taxService.surcharge$.subscribe((value) => {
      this.surcharge = parseFloat(value?.replace(/,/g, '')) || 0;
      this.calculateTotal();
    });

    this.taxService.penalty$.subscribe((value) => {
      this.penalty = parseFloat(value?.replace(/,/g, '')) || 0;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    let total = this.taxAmount;

    if (this.filingType === '1') {
      total += this.surcharge + this.penalty;
    }

    this.totalAmount = total.toFixed(2);

    this.taxService.setTotalAmount(total);
  }
}
