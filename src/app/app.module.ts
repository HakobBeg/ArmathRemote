import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AuthenthifyComponent} from '../Components/Authenthification/authenthify/authenthify.component';
import {LoginComponent} from '../Components/Authenthification/login/login.component';
import {RegisterComponent} from '../Components/Authenthification/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { NewsAndFeedComponent } from '../Components/news-and-feed/news-and-feed.component';
import { ContentComponent } from '../Components/content/content.component';
import { HomeComponent } from '../Components/home/home.component';
import { InfoComponent } from '../Components/info/info.component';
import { ChatComponent } from '../Components/chat/chat.component';
import {MessageComponent} from '../Components/message/message.component';
import { PostComponent } from '../Components/post/post.component';
import {MatVideoModule} from 'mat-video';
import { ProblemsComponent } from '../Components/problems/problems.component';
import { ProblemComponent } from '../Components/problem/problem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthenthifyComponent,
    LoginComponent,
    RegisterComponent,
    NewsAndFeedComponent,
    ContentComponent,
    HomeComponent,
    InfoComponent,
    ChatComponent,
    MessageComponent,
    PostComponent,
    ProblemsComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
