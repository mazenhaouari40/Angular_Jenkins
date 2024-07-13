import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[RouterOutlet],[WelcomeComponent],[LoginComponent],[RouterModule],[MenuComponent],[FooterComponent]],
  templateUrl: './app.component.html',
 //  template: '<h1>todo</h1>',

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
