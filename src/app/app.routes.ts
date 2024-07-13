import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user-modal/user-modal.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    {path : 'login',component : LoginComponent},
    {path : 'welcome/:name', component: WelcomeComponent},
    {path : 'user', component: UserComponent},
    {path : 'model', component: UserModalComponent},
    { path: 'edit/:id', component: UserModalComponent },
    {path : '**', component: ErrorComponent}


];
