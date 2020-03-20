import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenthifyComponent} from '../Components/Authenthification/authenthify/authenthify.component';
import {LoginComponent} from '../Components/Authenthification/login/login.component';
import {RegisterComponent} from '../Components/Authenthification/register/register.component';
import {AppComponent} from './app.component';
import {ContentComponent} from '../Components/content/content.component';
import {HomeComponent} from '../Components/home/home.component';
import {InfoComponent} from '../Components/info/info.component';
import {NewsAndFeedComponent} from '../Components/news-and-feed/news-and-feed.component';
import {ChatComponent} from '../Components/chat/chat.component';
import {ProblemsComponent} from '../Components/problems/problems.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthenthifyComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},

    ]
  },
  {path: '', component: InfoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'home', component: ContentComponent,
    children: [
      {path: 'newsfeed', component: NewsAndFeedComponent},
      {path: 'groupchat', component: ChatComponent},
      {path: 'problems', component: ProblemsComponent},
      {path: '', component: HomeComponent},

    ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
