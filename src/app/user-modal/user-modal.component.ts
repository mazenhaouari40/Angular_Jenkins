import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importez FormsModule ici
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [[FormsModule],[HttpClientModule],[NgIf]],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})

export class UserModalComponent implements OnInit {
testId= 0;
//private apiUrl = 'http://localhost:8081'; 
private apiUrl = 'https://backend-jenkins.onrender.com'; 

  ngOnInit(): void {
    this.testId = this.route.snapshot.params['id'];
    this.isAddMode = !this.testId;
    console.log('isAddMode:', this.isAddMode);
    console.log(this.testId);
  
}

  user = {
      nom: '',
      email: '',
      num_tel: ''
    };

    isAddMode = true;
  constructor(
    private http: HttpClient,
     private router: Router,
     private route: ActivatedRoute,
  ) { 
  }

  onSubmit() {
    this.http.post(this.apiUrl+'/user/add', this.user)
      .subscribe(response => {
        this.router.navigate(['/user']);
      });
  }


  edit(): void {
  const user_put={
    id : this.testId,
    nom: this.user.nom,
    email: this.user.email,
    num_tel: this.user.num_tel
  }
    // this.http.put('http://localhost:8081/edit/${this.testId}', user_put)
    this.http.put(this.apiUrl+`/edit/${this.testId }`, user_put)
    .subscribe(response => {
      console.log(this.testId);
      this.router.navigate(['/user']);
    });
  }

}
