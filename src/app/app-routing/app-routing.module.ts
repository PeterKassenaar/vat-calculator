import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VatBootstrapComponent} from '../vat-bootstrap/vat-bootstrap.component';
import {VatMaterialComponent} from '../vat-material/vat-material.component';

const appRoutes: Routes = [
	{path: '', redirectTo: 'bootstrap', pathMatch: 'full'},
	{path: 'bootstrap', component: VatBootstrapComponent},
	{path: 'material', component: VatMaterialComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
