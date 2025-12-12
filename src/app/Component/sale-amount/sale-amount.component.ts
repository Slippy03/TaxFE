import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css',
})
export class SaleAmountComponent implements OnInit {
  saleAmount: string = '';

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.saleAmount = this.taxService.saleAmountValue || '';
  }

  onSaleFocus() {
    if (!this.saleAmount) return;
    this.saleAmount = this.saleAmount.replace(/,/g, '');
  }

  onSaleBlur() {
    if (!this.saleAmount) return;

    const raw = this.saleAmount.replace(/,/g, '');
    if (isNaN(Number(raw))) {
      this.saleAmount = '';
      return;
    }

    const num = parseFloat(raw);
    this.saleAmount = num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    this.taxService.setSaleAmount(this.saleAmount);
  }
}
