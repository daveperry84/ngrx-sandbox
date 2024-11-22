import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToHomeLinkComponent } from './back-to-home-link.component';

describe('BackToHomeLinkComponent', () => {
  let component: BackToHomeLinkComponent;
  let fixture: ComponentFixture<BackToHomeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToHomeLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToHomeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
