import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css'
})
export class FilingTypeComponent {

  filingType = 0;

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.taxService.setFilingType(this.filingType.toString());
  }

  onTypeChanged() {
    this.taxService.setFilingType(this.filingType.toString());
  }
}
