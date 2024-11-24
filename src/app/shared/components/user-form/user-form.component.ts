import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserData } from '../../models/user-data.model';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnDestroy {
  @Input() userData!: UserData;
  @Output() saveUser = new EventEmitter<UserData>();

  form!: FormGroup;
  onDestroy$ = new Subject<void>();

  get phoneNumbers() {
    return this.form.get('phoneNumbers') as FormArray;
  }

  get phoneNumberControls() {
    return this.phoneNumbers.controls as FormControl[];
  }

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnChanges(): void {
    this.buildUserFormFromState(this.userData);

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

  buildUserFormFromState(userState: UserData): void {
    this.form = this.formBuilder.group({
      name: [userState.name, { validators: [Validators.required], updateOn: 'blur' }],
      emailAddress: [userState.emailAddress, { 
        validators: [Validators.required, Validators.email], 
        updateOn: 'blur' 
      }],
      phoneNumbers: this.formBuilder.array([]),
      interests: this.formBuilder.group({
        fitness: [userState.interests.fitness],
        reading: [userState.interests.reading],
        movies: [userState.interests.movies],
        gaming: [userState.interests.gaming],
        cooking: [userState.interests.cooking],
        travelling: [userState.interests.travelling],
      })
    });

    userState.phoneNumbers.forEach((phoneNumberValue) => {
      this.addPhoneNumber(phoneNumberValue);
    })
  }

  addPhoneNumber(value: string = '') {
    const phoneNumberControl = this.formBuilder.control([value], { 
      validators: [Validators.pattern("[0-9]{11}")], 
      updateOn: 'blur' 
    });
    this.phoneNumbers.push(phoneNumberControl);
  }

  deletePhoneNumber(index: number) {
    if (this.phoneNumbers.length > 1) {
      this.phoneNumbers.removeAt(index);
    }
  }
}
