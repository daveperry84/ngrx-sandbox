import { Component } from '@angular/core';
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { UserData } from '../../shared/models/user-data.model';
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-ng-services-form',
  standalone: true,
  imports: [
    UserFormComponent
],
  templateUrl: './ng-services-form.component.html',
  styleUrl: './ng-services-form.component.scss'
})
export class NgServicesFormComponent {
  userData!: UserData;

  constructor(private userDataService: UserDataService) {
    this.userData = this.userDataService.getUserData();
  }
  
  saveUserData(user: UserData): void {
    this.userDataService.setUserData(user);
  }
}
