import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });





  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to welcome page if credentials are correct', () => {
    component.username = 'mazen';
    component.password = 'test';
    component.handlelogin();
    expect(component.invalidLogin).toBe(false);
  });

  it('should not navigate to welcome page if credentials are incorrect', () => {
    component.username = 'mazen';
    component.password = '111';
    component.handlelogin();
    expect(component.invalidLogin).toBe(true);
  });

});
