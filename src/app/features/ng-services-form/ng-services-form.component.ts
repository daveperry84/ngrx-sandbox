import { Component } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/components/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../shared/models/user-data.model';
import { UserDataService } from '../../shared/services/user-data.service';

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
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService) {
    this.buildUserFormFromState(this.userDataService.getUserData());
  }

  buildUserFormFromState(userState: UserData): void {
    this.userForm = this.formBuilder.group({
      name: [userState.name, { validators: [Validators.required], updateOn: 'blur' }],
      emailAddress: [userState.emailAddress, { 
        validators: [Validators.required, Validators.email], 
        updateOn: 'blur' 
      }],
      phoneNumber: [userState.phoneNumber, { 
        validators: [Validators.required, Validators.pattern("[0-9]{11}")], 
        updateOn: 'blur' 
      }],
      interests: this.formBuilder.group({
        fitness: [userState.interests.fitness],
        reading: [userState.interests.reading],
        movies: [userState.interests.movies],
        gaming: [userState.interests.gaming],
        cooking: [userState.interests.cooking],
        travelling: [userState.interests.travelling],
      })
    });
  }
  
  saveUserData(user: UserData): void {
    this.userDataService.setUserData(user);
  }
}
