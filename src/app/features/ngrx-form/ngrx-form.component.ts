import { Component, OnInit } from '@angular/core';
import { BackToHomeLinkComponent } from "../../shared/components/back-to-home-link/back-to-home-link.component";
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectUserData } from '../../shared/states/user-data/user-data.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { take } from 'rxjs';
import { UserData, UserDataState } from '../../shared/models/user-data.model';
import { undoLastUserChange, updateUser } from '../../shared/states/user-data/user-data.actions';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [
    BackToHomeLinkComponent,
    UserFormComponent,
    MatButtonModule
],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.scss'
})
export class NgrxFormComponent implements OnInit {
  userForm!: FormGroup;
  undoEnabled = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.retrieveUserState((userState) => {
      this.undoEnabled = !!userState.past.length;
      this.buildUserFormFromState(userState.present);
    });
  }

  retrieveUserState(cb: (state: UserDataState) => void): void {
    this.store.select(selectUserData).pipe(take(1)).subscribe(cb);
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
    this.store.dispatch(updateUser(user));
    this.retrieveUserState((userState) => {
      this.undoEnabled = !!userState.past.length;
    });
  }

  undoLastChange(): void {
    this.store.dispatch(undoLastUserChange());
    this.retrieveUserState((userState) => {
      this.buildUserFormFromState(userState.present);
      this.undoEnabled = !!userState.past.length;
    });
  }
}
