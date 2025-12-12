import { Component } from '@angular/core';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-surcharge',
  standalone: true,
  imports: [],
  templateUrl: './surcharge.component.html',
  styleUrl: './surcharge.component.css',
})
export class SurchargeComponent {
  surcharge: string = '';

  constructor(private shared: TaxService) {}

  ngOnInit() {
    this.shared.taxAmount$.subscribe((value) => {
      if (!value) {
        this.surcharge = '';
        this.shared.setSurcharge(''); 
        return;
      }

      const raw = value.replace(/,/g, '');
      const num = parseFloat(raw);

      if (isNaN(num)) {
        this.surcharge = '';
        this.shared.setSurcharge('');
        return;
      }

      const sc = num * 0.1;

      this.surcharge = sc.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      this.shared.setSurcharge(this.surcharge); 
    });
  }
}
