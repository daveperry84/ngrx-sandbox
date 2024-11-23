import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { UserData } from '../../models/user-data.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { selectUserData } from '../../states/user-data/user-data.selector';
import { AsyncPipe } from '@angular/common';
import { updateUser } from '../../states/user-data/user-data.actions';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    AsyncPipe,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userData$: Observable<UserData>;
  form!: FormGroup;

  // form = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   emailAddress: ['', [Validators.required, Validators.email]],
  //   phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
  //   interests: this.formBuilder.group({
  //     fitness: [false],
  //     reading: [false],
  //     movies: [false],
  //     gaming: [false],
  //     cooking: [false],
  //     travelling: [false],
  //   })
  // })

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.userData$ = this.store.select(selectUserData);

    this.userData$.subscribe((userState) => {
      console.log('userState:', userState);

      this.form = this.formBuilder.group({
        name: [userState.name, Validators.required],
        emailAddress: [userState.emailAddress, [Validators.required, Validators.email]],
        phoneNumber: [userState.phoneNumber, [Validators.required, Validators.pattern("[0-9]{11}")]],
        interests: this.formBuilder.group({
          fitness: [userState.interests.fitness],
          reading: [userState.interests.reading],
          movies: [userState.interests.movies],
          gaming: [userState.interests.gaming],
          cooking: [userState.interests.cooking],
          travelling: [userState.interests.travelling],
        })
      })
    })
  }

  saveDetails(): void {
    if (this.form.valid) {
      console.log('Save Details', this.form.value);
      this.store.dispatch(updateUser(this.form.value))
    }
  }
}
