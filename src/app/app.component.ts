import {Component} from '@angular/core';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number;
  vat = 'inclusive';
  tariff = environment.vatHigh;

  result: number;   // result including/excluding VAT
  resultVat: number;  // amount of VAT

  vatHigh: number = environment.vatHigh;
  vatLow: number = environment.vatLow;
  vatLow2019: number = environment.vatLow2019;

  calculate() {
    // Inclusive or Exclusive?
    switch (this.vat) {
      case 'inclusive': {
        switch (this.tariff.toString()) {
          case this.vatHigh.toString(): {
            this.result = (this.amount / (1 + (this.vatHigh / 100)));
            this.resultVat = this.amount - this.result;
            break;
          }
          case this.vatLow.toString(): {
            this.result = (this.amount / (1 + (this.vatLow / 100)));
            this.resultVat = this.amount - this.result;
            break;
          }
          case this.vatLow2019.toString(): {
            this.result = ((this.amount * this.vatLow2019) / 100) + this.amount;
            this.resultVat = this.amount - this.result;
            break;
          }
          default:
            break;
        }
        break;
      }
      case 'exclusive': {
        switch (this.tariff.toString()) {
          case this.vatHigh.toString(): {
            this.result = ((this.amount * this.vatHigh) / 100) + this.amount;
            this.resultVat = this.result - this.amount;
            break;
          }
          case this.vatLow.toString(): {
            this.result = ((this.amount * this.vatLow) / 100) + this.amount;
            this.resultVat = this.result - this.amount;
            break;
          }
          case this.vatLow2019.toString(): {
            this.result = ((this.amount * this.vatLow2019) / 100) + this.amount;
            this.resultVat = this.result - this.amount;
            break;
          }
          default:
            break;
        }
        break;
      }
      default:
        break;
    }
  }// end calculate()
}
