import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User, UserComponent } from './user.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent,HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '1' } } } }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    controller = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create an instance with the correct properties', () => {
    const id = 1;
    const nom = 'John Doe';
    const email = 'john.doe@example.com';
    const num_tel = '123-456-7890';

    const user = new User(id, nom, email, num_tel);
    expect(user.id).toBe(id);
    expect(user.nom).toBe(nom);
    expect(user.email).toBe(email);
    expect(user.num_tel).toBe(num_tel);
  });
  



});
