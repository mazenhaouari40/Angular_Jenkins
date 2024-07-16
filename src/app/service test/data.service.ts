import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getAllUsers() {
  //   return this.http.get("http://localhost:8081/user");
  // }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8081/user");
  }

  updateUser(id :number, body : any){
    return this.http.put("http://localhost:8081/user/edit/"+id,body);
  }

  addUser(body : any){
    return this.http.post("http://localhost:8081/user/add",body);
  }

  deleteUser(id :number){
    return this.http.delete("http://localhost:8081/user/delete/"+id);
  }

}
