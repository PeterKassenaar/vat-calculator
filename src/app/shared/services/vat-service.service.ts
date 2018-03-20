import {Injectable} from '@angular/core';
import {VatResult} from '../vatResult';
import {environment} from '../../../environments/environment';

@Injectable()
export class VatService {

	// Local variables
	vatHigh: number    = environment.vatHigh;
	vatLow: number     = environment.vatLow;
	vatLow2019: number = environment.vatLow2019;
	result: number;
	resultVat: number;

	// calculate VAT amount for the components.
	calculate(vat: string, tariff: string, amount: number): VatResult {
		switch (vat) {
			case 'inclusive': {
				switch (tariff) {
					case this.vatHigh.toString(): {
						this.result    = (amount / (1 + (this.vatHigh / 100)));
						this.resultVat = amount - this.result;
						break;
					}
					case this.vatLow.toString(): {
						this.result    = (amount / (1 + (this.vatLow / 100)));
						this.resultVat = amount - this.result;
						break;
					}
					case this.vatLow2019.toString(): {
						this.result    = ((amount * this.vatLow2019) / 100) + amount;
						this.resultVat = amount - this.result;
						break;
					}
					default:
						break;
				}
				break;
			}
			case 'exclusive': {
				switch (tariff) {
					case this.vatHigh.toString(): {
						this.result    = ((amount * this.vatHigh) / 100) + amount;
						this.resultVat = this.result - amount;
						break;
					}
					case this.vatLow.toString(): {
						this.result    = ((amount * this.vatLow) / 100) + amount;
						this.resultVat = this.result - amount;
						break;
					}
					case this.vatLow2019.toString(): {
						this.result    = ((amount * this.vatLow2019) / 100) + amount;
						this.resultVat = this.result - amount;
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

		// Return result based on interface
		return {
			totalAmount: this.result,
			vatAmount  : this.resultVat
		}
	}// end calculate()
}
