import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilingTypeComponent } from "./Component/filing-type/filing-type.component";
import { MonthComponent } from "./Component/month/month.component";
import { PenaltyComponent } from "./Component/penalty/penalty.component";
import { SaleAmountComponent } from "./Component/sale-amount/sale-amount.component";
import { SurchargeComponent } from "./Component/surcharge/surcharge.component";
import { TaxAmountComponent } from "./Component/tax-amount/tax-amount.component";
import { YearComponent } from "./Component/year/year.component";
import { HeaderComponent } from "./Component/header/header.component";
import { ScreenComponent } from "./screen/screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilingTypeComponent, MonthComponent, PenaltyComponent, SaleAmountComponent, SurchargeComponent, TaxAmountComponent, YearComponent, HeaderComponent, ScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaxFE';
}
