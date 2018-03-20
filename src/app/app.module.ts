import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Routing
import {AppRoutingModule} from './app-routing/app-routing.module';

// Custom Angular Material Module
import {AngularMaterialModule} from './angular-material/angular-material.module';

// Components
import {AppComponent} from './app.component';
import {VatBootstrapComponent} from './vat-bootstrap/vat-bootstrap.component';
import {VatMaterialComponent} from './vat-material/vat-material.component';
import { VatService } from './shared/services/vat-service.service';


@NgModule({
	declarations: [
		AppComponent,
		VatBootstrapComponent,
		VatMaterialComponent
	],
	imports     : [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AngularMaterialModule
	],
	providers   : [VatService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
