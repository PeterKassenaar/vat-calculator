import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatSelectModule, MatToolbarModule, MatChipsModule} from '@angular/material';
import {MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

// Generic module for a collection of Angular Material Modules,
// so they don't have to be imported all on their own in the main AppModule
@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatSelectModule,
		MatGridListModule,
		MatFormFieldModule,
		MatInputModule,
		MatToolbarModule,
		MatChipsModule,
		MatCardModule
	],
	exports: [
		MatButtonModule,
		MatSelectModule,
		MatGridListModule,
		MatFormFieldModule,
		MatInputModule,
		MatToolbarModule,
		MatChipsModule,
		MatCardModule
	]
})
export class AngularMaterialModule {
}
