import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing'
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let TestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    TestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get all users", () =>{
    service.getAllUsers().subscribe(
      data => {
        expect(data).toBeTruthy();
        expect(data.length).toBe(3);
      });
      const req = TestingController.expectOne('http://localhost:8081/user')
      expect(req.request.method).toEqual('GET');
  });
  

  it("should update user", () =>{
    let body =  {
      "id": 29,
      "email": "mazen_haouari@gmail.com",
      "num_tel": 111111,
      "nom": "Mazen Haouari"
  };
    service.updateUser(29,body).subscribe(
      (user: any) => {
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
      });
      const req = TestingController.expectOne('http://localhost:8081/user/edit/29')
      expect(req.request.method).toEqual('PUT');
  });

  it("should add user", () =>{
    let body =  {
      "email": "mazen_haouari@gmail.com",
      "num_tel": 111111,
      "nom": "Mazen Haouari"
  };
    service.addUser(body).subscribe(
      (user: any) => {
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
      });
      const req = TestingController.expectOne('http://localhost:8081/user/add')
      expect(req.request.method).toEqual('POST');
  });

  it("should delete user", () =>{
    service.deleteUser(38).subscribe(
      (user: any) => {
        expect(user).toBeTruthy();
        // expect(user.id).toBe(1);
      });
      const req = TestingController.expectOne('http://localhost:8081/user/delete/38')
      expect(req.request.method).toEqual('DELETE');
  });


  afterEach(() => {
    TestingController.verify();
  });


});


