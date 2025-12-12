import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaxService {
  private SaleAmountSource = new BehaviorSubject<string>('');
  saleAmount$ = this.SaleAmountSource.asObservable();
  saleAmountValue: string = '';

  setSaleAmount(value: string) {
    this.saleAmountValue = value;
    this.SaleAmountSource.next(value);
  }

  private TaxAmountSource = new BehaviorSubject<string>('');
  taxAmount$ = this.TaxAmountSource.asObservable();

  setTaxAmount(value: string) {
    this.TaxAmountSource.next(value);
  }

  private FilingTypeSource = new BehaviorSubject<string>('0');
  filingType$ = this.FilingTypeSource.asObservable();

  setFilingType(value: string) {
    this.FilingTypeSource.next(value);
  }

  private SurchargeSource = new BehaviorSubject<string>('');
  surcharge$ = this.SurchargeSource.asObservable();

  setSurcharge(value: string) {
    this.SurchargeSource.next(value);
  }

  private PenaltySource = new BehaviorSubject<string>('');
  penalty$ = this.PenaltySource.asObservable();

  setPenalty(value: string) {
    this.PenaltySource.next(value);
  }

  private MonthSource = new BehaviorSubject<number | null>(null);
  month$ = this.MonthSource.asObservable();
  setMonth(value: number) {
    this.MonthSource.next(value);
  }

  private YearSource = new BehaviorSubject<number | null>(null);
  year$ = this.YearSource.asObservable();
  setYear(value: number) {
    this.YearSource.next(value);
  }
  private TotalAmountSource = new BehaviorSubject<number>(0);
  totalAmount$ = this.TotalAmountSource.asObservable();

  setTotalAmount(value: number) {
    this.TotalAmountSource.next(value);
  }

  constructor() {}
}
