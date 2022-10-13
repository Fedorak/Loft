import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ProjectComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ProjectComponent
	],
	providers: []

})

export class ProjectModule { }
