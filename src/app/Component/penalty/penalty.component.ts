import { Component, OnInit } from '@angular/core';
import { TaxService } from '../../Service/tax.service';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [],
  templateUrl: './penalty.component.html',
  styleUrl: './penalty.component.css',
})
export class PenaltyComponent implements OnInit {
  penaltyValue: string = '';

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.taxService.saleAmount$.subscribe((value) => {
      if (value && value.trim() !== '') {
        this.penaltyValue = '200';
        this.taxService.setPenalty('200');
      } else {
        this.penaltyValue = '';
        this.taxService.setPenalty('');
      }
    });
  }
}
