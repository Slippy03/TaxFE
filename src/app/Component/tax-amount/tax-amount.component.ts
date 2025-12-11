import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css'
})
export class TaxAmountComponent {
taxAmount: string = '';

onTaxFocus() {
  if (!this.taxAmount) return;

  this.taxAmount = this.taxAmount.replace(/,/g, '');
}

onTaxBlur() {
  if (!this.taxAmount) return;

  const raw = this.taxAmount.replace(/,/g, '');

  if (isNaN(Number(raw))) {
    this.taxAmount = '';
    return;
  }

  const num = parseFloat(raw);

  this.taxAmount = num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

}
