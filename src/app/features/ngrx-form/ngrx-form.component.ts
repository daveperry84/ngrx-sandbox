import { Component } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/components/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectUserData } from '../../shared/states/user-data/user-data.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { first, Observable } from 'rxjs';
import { UserData } from '../../shared/models/user-data.model';
import { updateUser } from '../../shared/states/user-data/user-data.actions';

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
  userData$: Observable<UserData>;
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.userData$ = this.store.select(selectUserData);

    this.userData$.pipe(first()).subscribe((userState) => {
      this.buildUserFormFromState(userState);
    })
  }

  buildUserFormFromState(userState: UserData): void {
    this.userForm = this.formBuilder.group({
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
    });
  }

  saveUserData(user: UserData): void {
    this.store.dispatch(updateUser(user))
  }
}
