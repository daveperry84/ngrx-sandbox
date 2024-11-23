import { Component } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/components/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        emailAddress: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
        interests: this.formBuilder.group({
          fitness: [false],
          reading: [false],
          movies: [false],
          gaming: [false],
          cooking: [false],
          travelling: [false],
        })
      })
  }
  
  saveUserData(userForm: FormGroup): void {
    if (userForm.valid) {
      console.log('Save Data', userForm.value);
    }
  }
}
