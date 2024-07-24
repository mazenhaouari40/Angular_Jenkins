import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../Environment/environment.prod';


export class User{
  constructor(
    public id: number,
    public nom: string,
    public email: string,
    public num_tel: string)
    {}
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [[NgFor],[RouterModule],[HttpClientModule],[NgIf] ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent implements OnInit {
  //private apiUrl = 'http://localhost:8081'; 
 // private apiUrl = 'https://backend-jenkins.onrender.com'; 
  private apiUrl = environment.server; 


  users: User[] = [];
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData().subscribe(
      (response) => {
        this.users = response.map((user: any) => new User(user.id, user.nom, user.email, user.num_tel));
      }
    );
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/user");
  }

  delete(id: number): void {
    this.http.delete(this.apiUrl+`/user/delete/${id}`)
      .subscribe(
        response => {
          console.log('User deleted', response);
          this.router.navigate(['/login']);
        }
      );
  }
}