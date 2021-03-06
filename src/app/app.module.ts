import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {IntroComponent} from './Components/intro/intro.component';
import {ErrorComponent} from './Components/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './Pipes/safe.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Components/main/main.component';
import { ExercisesComponent } from './Components/exercises/exercises.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ColorPickerModule } from 'ngx-color-picker';

import {FormsModule} from '@angular/forms';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

import {AuthGuard} from './Guards/auth.guard';
import { ChildGuard } from './Guards/child.guard';
import { DynamicComponent } from './Components/dynamic/dynamic.component';
import { ChatroomComponent } from './Components/chatroom/chatroom.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { GamesComponent } from './Components/games/games.component';
import { LinksComponent } from './Components/links/links.component';

const routes=[
  {
    path:'',
    component:IntroComponent,
    canActivate:[ChildGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'main',
    children:[
      {
        path:'',
        component:MainComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'links',
        component:LinksComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'games',
        component:GamesComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'exercise',
        component:ExercisesComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'dynamic',
        component:DynamicComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'chatroom',
        component:ChatroomComponent,
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:'**',
    component:ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ErrorComponent,
    SafePipe,
    MainComponent,
    ExercisesComponent,
    RegisterComponent,
    LoginComponent,
    DynamicComponent,
    ChatroomComponent,
    ProfileComponent,
    GamesComponent,
    LinksComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ColorPickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    ChildGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
