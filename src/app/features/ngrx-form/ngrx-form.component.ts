import { Component } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/user-form/user-form.component";

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [
    BackToHomeLinkComponent,
    UserFormComponent
],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.scss'
})
export class NgrxFormComponent {
  
}
