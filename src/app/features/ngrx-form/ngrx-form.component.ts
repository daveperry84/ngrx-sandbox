import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BackToHomeLinkComponent } from "../../shared/back-to-home-link/back-to-home-link.component";

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    BackToHomeLinkComponent
],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.scss'
})
export class NgrxFormComponent {
  form = this.formBuilder.group({
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

  constructor(private formBuilder: FormBuilder) {}

  saveDetails(): void {
    if (this.form.valid) {
      console.log('Save Details', this.form.value);
      // Do Something
    }
  }
}
