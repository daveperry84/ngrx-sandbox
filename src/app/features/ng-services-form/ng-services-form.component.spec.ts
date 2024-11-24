import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgServicesFormComponent } from './ng-services-form.component';

describe('NgServicesFormComponent', () => {
  let component: NgServicesFormComponent;
  let fixture: ComponentFixture<NgServicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgServicesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgServicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
