import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserData } from '../../models/user-data.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnDestroy {
  @Input() form!: FormGroup;
  @Output() saveUser = new EventEmitter<UserData>();

  onDestroy$ = new Subject<void>();
  
  ngOnChanges(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((formValue) => {
        this.saveUser.emit(formValue)
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
