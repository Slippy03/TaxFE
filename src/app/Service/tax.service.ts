import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaxService {
  private SaleAmountSource = new BehaviorSubject<string>("");
  saleAmount$ = this.SaleAmountSource.asObservable();

  setSaleAmount(value:string){
    this.SaleAmountSource.next(value);
  }
  
  private TaxAmountSource = new BehaviorSubject<string>("");
  taxAmount$ = this.TaxAmountSource.asObservable();
  setTaxAmount(value:string){
    this.TaxAmountSource.next(value);
  }

  constructor() { }
  
}
