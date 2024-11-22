import { Routes } from '@angular/router';
import { NgrxFormComponent } from './features/ngrx-form/ngrx-form.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ngrx-form', component: NgrxFormComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
