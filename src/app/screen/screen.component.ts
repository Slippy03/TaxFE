import { Component } from '@angular/core';
import { HeaderComponent } from "../Component/header/header.component";
import { FilingTypeComponent } from "../Component/filing-type/filing-type.component";
import { MonthComponent } from "../Component/month/month.component";
import { SaleAmountComponent } from "../Component/sale-amount/sale-amount.component";
import { TaxAmountComponent } from "../Component/tax-amount/tax-amount.component";
import { YearComponent } from "../Component/year/year.component";
import { SurchargeComponent } from "../Component/surcharge/surcharge.component";
import { PenaltyComponent } from "../Component/penalty/penalty.component";
import { TotalAmountComponent } from "../Component/total-amount/total-amount.component";

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [HeaderComponent, FilingTypeComponent, MonthComponent, SaleAmountComponent, TaxAmountComponent, YearComponent, SurchargeComponent, PenaltyComponent, TotalAmountComponent],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

}
