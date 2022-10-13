import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: DashboardComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		DashboardComponent
	],
	providers: []

})

export class DashboardModule { }
