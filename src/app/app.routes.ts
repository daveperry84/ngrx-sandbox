import { Routes } from '@angular/router';
import { NgrxFormComponent } from './features/ngrx-form/ngrx-form.component';
import { HomeComponent } from './features/home/home.component';
import { NgServicesFormComponent } from './features/ng-services-form/ng-services-form.component';
import { QAndAComponent } from './features/q-and-a/q-and-a.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ngrx-form', component: NgrxFormComponent },
    { path: 'ng-services-form', component: NgServicesFormComponent },
    { path: 'q-and-a', component: QAndAComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
