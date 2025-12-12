import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from "../Component/header/header.component";
import { FilingTypeComponent } from "../Component/filing-type/filing-type.component";
import { MonthComponent } from "../Component/month/month.component";
import { SaleAmountComponent } from "../Component/sale-amount/sale-amount.component";
import { TaxAmountComponent } from "../Component/tax-amount/tax-amount.component";
import { YearComponent } from "../Component/year/year.component";
import { SurchargeComponent } from "../Component/surcharge/surcharge.component";
import { PenaltyComponent } from "../Component/penalty/penalty.component";
import { TotalAmountComponent } from "../Component/total-amount/total-amount.component";
import { TaxService } from '../Service/tax.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [
    HeaderComponent,
    FilingTypeComponent,
    MonthComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    YearComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    CommonModule
  ],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {
  @ViewChild('taxDataModal') taxDataModal!: ElementRef;

  filingType = '0';
  screenState = 1;

  saleAmount = '0.00';
  taxAmount = '0.00';
  surcharge = '0.00';
  penalty = '0.00';
  totalAmount = '0.00';
  month: number | null = null;
  year: number | null = null;

  modalInstance: any;

  constructor(private taxService: TaxService) {}

  ngOnInit(): void {
    this.taxService.saleAmount$.subscribe(val => {
      const num = parseFloat(val.replace(/,/g, '')) || 0;
      this.saleAmount = num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
    this.taxService.filingType$.subscribe(type => this.filingType = type);
    this.taxService.taxAmount$.subscribe(val => this.taxAmount = val);
    this.taxService.surcharge$.subscribe(val => this.surcharge = val);
    this.taxService.penalty$.subscribe(val => this.penalty = val);
    this.taxService.totalAmount$.subscribe(val => this.totalAmount = val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    this.taxService.month$.subscribe(val => this.month = val);
    this.taxService.year$.subscribe(val => this.year = val);
  }

  goNext() {
    if (!this.validateSelect()) return; 
    this.screenState = 2;
  }

  goBack() {
    this.screenState = 1;
  }

  getMonthName(): string {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return this.month ? months[this.month - 1] : '';
  }

  get taxData() {
    return {
      filingType: this.filingType,
      month: this.month,
      year: this.year,
      saleAmount: this.saleAmount,
      taxAmount: this.taxAmount,
      surcharge: this.surcharge,
      penalty: this.penalty,
      totalAmount: this.totalAmount
    };
  }

  openTaxDataModal() {
    if (!this.validateSelect()) return; 
    this.modalInstance = new (window as any).bootstrap.Modal(this.taxDataModal.nativeElement);
    this.modalInstance.show();
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  validateSelect(): boolean {
    if (!this.filingType || this.filingType === '') {
      Swal.fire('Warning', 'Please select a Filing Type!', 'warning');
      return false;
    }
    if (!this.month) {
      Swal.fire('Warning', 'Please select a Month!', 'warning');
      return false;
    }
    if (!this.year) {
      Swal.fire('Warning', 'Please select a Year!', 'warning');
      return false;
    }
    return true;
  }
}
