import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component'; 
import { AboutComponent } from './app/about/about.component'; 
import { ProfileComponent } from './app/profile/profile.component'; 
import { ReposComponent } from './app/repos/repos.component'; 
import { ErrorPageComponent }from './app/error-page/error-page.component';

const routes : Routes = [
        { path: 'Home', component: HomeComponent },
        { path: 'About', component: AboutComponent },
        { path: 'User/:name', component: ProfileComponent },
        { path: '', component: HomeComponent },
        { path: ':*', component: ErrorPageComponent },
        { path: 'Userrepo/:name', component: ReposComponent },
];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })

 export class AppRoutingModule{}