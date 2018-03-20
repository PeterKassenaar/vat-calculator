import {Component} from '@angular/core';
import {environment} from '../../environments/environment';
import {VatService} from '../shared/services/vat-service.service';
import {VatResult} from '../shared/vatResult';

@Component({
	selector   : 'app-vat-material',
	templateUrl: './vat-material.component.html'
})
export class VatMaterialComponent {

	amount: number;
	vat    = 'inclusive'; // TODO: make this a constant instead of string 'inclusive' or 'exclusive'
	tariff = environment.vatHigh;

	result: number;   // result including/excluding VAT
	resultVat: number;  // amount of VAT

	vatHigh: number    = environment.vatHigh;
	vatLow: number     = environment.vatLow;
	vatLow2019: number = environment.vatLow2019;


	constructor(private vatService: VatService) {

	}

	calculate() {
		let result: VatResult = this.vatService.calculate(this.vat, this.tariff.toString(), this.amount);
		this.result           = result.totalAmount;
		this.resultVat        = result.vatAmount;
	}
}
