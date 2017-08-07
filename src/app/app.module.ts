import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserServiceService } from '././user-service.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ReposComponent } from './repos/repos.component';
import { definedConstants } from "definedConstants";
const appRoutes: Routes = [
   { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'User/:name', component: ProfileComponent },
  { path: '', component: HomeComponent },
   { path: 'Userrepo/:name', component: ReposComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ UserServiceService, definedConstants ],
  bootstrap: [AppComponent]
})
export class AppModule { }
