import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [[FormsModule],[NgIf]],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username = 'mazen'
  password ='test'

  errormessage= 'Invalid Credentials'
  invalidLogin = false 

  constructor(private router: Router) {}


  handlelogin(){
    console.log(this.username)
    if (this.username==="mazen" && this.password === 'test') {

      this.router.navigate(['welcome',this.username],)
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
  }


}
