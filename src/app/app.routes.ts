import { Routes } from '@angular/router';
import { NgrxFormComponent } from './features/ngrx-form/ngrx-form.component';
import { HomeComponent } from './features/home/home.component';
import { NgServicesFormComponent } from './features/ng-services-form/ng-services-form.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ngrx-form', component: NgrxFormComponent },
    { path: 'ng-services-form', component: NgServicesFormComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
