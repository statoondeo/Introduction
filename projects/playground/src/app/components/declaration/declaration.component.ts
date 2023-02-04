import { Component } from '@angular/core';
import { FeesService } from '../../Services/fees.services';

@Component({
  selector: 'declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css'],
  // providers: [{ provide: FeesService, useFactory: () => new FeesService() }],
  // providers: [{ provide: FeesService, useClass: FeesService }],
  // providers: [FeesService],
})
export class DeclarationComponent {
  fees: number = 0;
  onClickDeclaration(revenue: number) {
    // Caclul complexe de l'impôt
    this.fees = this.feeCalculatorService.calculate(revenue);
  }
  constructor(private feeCalculatorService: FeesService) {}
}
