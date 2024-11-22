import { Component } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/user-form/user-form.component";

@Component({
  selector: 'app-ng-services-form',
  standalone: true,
  imports: [
    BackToHomeLinkComponent,
    UserFormComponent
],
  templateUrl: './ng-services-form.component.html',
  styleUrl: './ng-services-form.component.scss'
})
export class NgServicesFormComponent {
 
}
