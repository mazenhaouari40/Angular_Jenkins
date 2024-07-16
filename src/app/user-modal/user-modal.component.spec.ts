import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalComponent } from './user-modal.component';
import { ActivatedRoute } from '@angular/router';

describe('UserModalComponent', () => {
  let component: UserModalComponent;
  let fixture: ComponentFixture<UserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModalComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have form controls for name, email, and phone number', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#nom')).toBeTruthy();
    expect(compiled.querySelector('#e_mail')).toBeTruthy();
    expect(compiled.querySelector('#num_tel')).toBeTruthy();
  });


});
