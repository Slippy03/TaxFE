import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../Service/tax.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tax-amount.component.html',
  styleUrl: './tax-amount.component.css',
})
export class TaxAmountComponent {
  taxAmount: string = '';

  constructor(private shared: TaxService) {}

  ngOnInit() {
    this.shared.saleAmount$.subscribe((value) => {
      if (!value) {
        this.taxAmount = '';
        return;
      }

      const raw = value.replace(/,/g, '');
      const num = parseFloat(raw);

      if (isNaN(num)) {
        this.taxAmount = '';
        this.shared.setTaxAmount('');

        return;
      }

      const tax = num * 0.07;

      this.taxAmount = tax.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.shared.setTaxAmount(this.taxAmount);
    });
  }

  onTaxFocus() {
    if (!this.taxAmount) return;

    this.taxAmount = this.taxAmount.replace(/,/g, '');
  }

  onTaxBlur() {
    if (!this.taxAmount) return;

    const raw = this.taxAmount.replace(/,/g, '');
    const num = Number(raw);

    if (isNaN(num)) {
      this.taxAmount = '';
      this.shared.setTaxAmount('');
      return;
    }

    const baseRaw = this.shared.saleAmountValue?.replace(/,/g, '') || '0';
    const baseNum = Number(baseRaw) * 0.07;

    const diff = Math.abs(num - baseNum);
    if (diff > 20) {
      Swal.fire('Invalid Tax', '', 'error');

      this.taxAmount = baseNum.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.shared.setTaxAmount(this.taxAmount);
      return;
    }

    this.taxAmount = num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    this.shared.setTaxAmount(this.taxAmount);
  }
}
