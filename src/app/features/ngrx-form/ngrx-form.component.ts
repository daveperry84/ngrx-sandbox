import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from "../../shared/components/user-form/user-form.component";
import { selectUserData } from '../../shared/states/user-data/user-data.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { take } from 'rxjs';
import { UserData, UserDataState } from '../../shared/models/user-data.model';
import { redoLastUserChange, undoLastUserChange, updateUser } from '../../shared/states/user-data/user-data.actions';
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

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.retrieveUserState((userState) => {
      this.undoEnabled = !!userState.past.length;
      this.redoEnabled = !!userState.future.length;
      this.userData = userState.present;
    });
  }

  retrieveUserState(cb: (state: UserDataState) => void): void {
    this.store.select(selectUserData).pipe(take(1)).subscribe(cb);
  }

  saveUserData(user: UserData): void {
    this.store.dispatch(updateUser(user));
    this.retrieveUserState((userState) => {
      this.undoEnabled = !!userState.past.length;
      this.redoEnabled = !!userState.future.length;
    });
  }

  undoLastChange(): void {
    this.store.dispatch(undoLastUserChange());
    this.retrieveUserState((userState) => {
      this.userData = { ...this.userData, ...userState.present };
      this.undoEnabled = !!userState.past.length;
      this.redoEnabled = !!userState.future.length;
    });
  }

  redoLastChange(): void {
    this.store.dispatch(redoLastUserChange());
    this.retrieveUserState((userState) => {
      this.userData = { ...this.userData, ...userState.present };
      this.undoEnabled = !!userState.past.length;
      this.redoEnabled = !!userState.future.length;
    });
  }
}
