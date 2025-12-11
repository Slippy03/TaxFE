import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sale-amount',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './sale-amount.component.html',
  styleUrl: './sale-amount.component.css'
})
export class SaleAmountComponent {
saleAmount: string = '';

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
}
}
