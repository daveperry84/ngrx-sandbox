import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { selectUserData } from '../../shared/states/user-data/user-data.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { take } from 'rxjs';
import { UserData, UserDataState } from '../../shared/models/user-data.model';
import { redoLastUserChange, resetUser, undoLastUserChange, updateUser } from '../../shared/states/user-data/user-data.actions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [
    UserFormComponent,
    MatButtonModule,
    MatIconModule,
],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.scss'
})
export class NgrxFormComponent implements OnInit {
  userData!: UserData;
  undoEnabled = false;
  redoEnabled = false;
  resetEnabled = false;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.retrieveUserState((userState) => {
      this.setActionStates(userState);
      this.userData = userState.present;
    });
  }

  retrieveUserState(cb: (state: UserDataState) => void): void {
    this.store.select(selectUserData).pipe(take(1)).subscribe(cb);
  }

  saveUserData(user: UserData): void {
    this.store.dispatch(updateUser(user));
    this.retrieveUserState((userState) => {
      this.setActionStates(userState);
    });
  }

  undoLastChange(): void {
    this.store.dispatch(undoLastUserChange());
    this.retrieveUserState((userState) => {
      this.userData = { ...this.userData, ...userState.present };
      this.setActionStates(userState);
    });
  }

  redoLastChange(): void {
    this.store.dispatch(redoLastUserChange());
    this.retrieveUserState((userState) => {
      this.userData = { ...this.userData, ...userState.present };
      this.setActionStates(userState);
    });
  }

  resetForm(): void {
    this.store.dispatch(resetUser());
    this.retrieveUserState((userState) => {
      this.userData = { ...userState.present };
      this.setActionStates(userState);
    });
  }

  private setActionStates(userState: UserDataState): void {
    this.undoEnabled = !!userState.past.length;
    this.redoEnabled = !!userState.future.length;
    this.resetEnabled = this.undoEnabled || this.redoEnabled;
  }
}
