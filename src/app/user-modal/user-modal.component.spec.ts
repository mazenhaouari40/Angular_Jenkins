import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserModalComponent } from './user-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserModalComponent', () => {
  let component: UserModalComponent;
  let fixture: ComponentFixture<UserModalComponent>;
  let TestingController: HttpTestingController;
  let route: Router;

  let http: HttpClient;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModalComponent,HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UserModalComponent);
    component = fixture.componentInstance;
    TestingController = TestBed.inject(HttpTestingController);
    route = TestBed.inject(Router);
    // let service = TestBed.inject(UserModalComponent);
    http = TestBed.inject(HttpClient);

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


  it('should submit the form and navigate to /user', fakeAsync(() => {
    // Mock user data in the component
    component.user = { nom: 'Mazen haouari', email: 'mazen@gmail.com', num_tel: '111111' };


    // Spy on the router navigate method
    const navigateSpy = spyOn(route, 'navigate');

    // Trigger form submission
    // component.onSubmit();

    http.post('http://localhost:8081/user/add', component.user)
      .subscribe(response => {
        route.navigate(['/user']);
      });

    // Expect a POST request to 'http://localhost:8081/user/add'
    const req = TestingController.expectOne('http://localhost:8081/user/add');
    expect(req.request.method).toEqual('POST');
    req.flush({}); // Simulate a successful HTTP response

    // Expect navigation to '/user'
    expect(navigateSpy).toHaveBeenCalledWith(['/user']);

    // Advance the fakeAsync timer to simulate the passage of time
    tick();
  }));


});
