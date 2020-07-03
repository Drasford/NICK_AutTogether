import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {IntroComponent} from './Components/intro/intro.component';
import {ErrorComponent} from './Components/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExcerciseComponent } from './excercise/excercise.component';
import { MainComponent } from './main/main.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ColorPickerModule } from 'ngx-color-picker';

import {AngularFireModule} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig={
  apiKey: "AIzaSyDbxpwqf99flpEtEtHGPIaKBG3e-21rFx4",
  authDomain: "nickytproj.firebaseapp.com",
  databaseURL: "https://nickytproj.firebaseio.com",
  projectId: "nickytproj",
  storageBucket: "nickytproj.appspot.com",
  messagingSenderId: "544749017308",
  appId: "1:544749017308:web:e032e7289dfabc179a3c19"
}

const routes=[
  {
    path:'',
    component:IntroComponent
  },
  {
    path:'main',
    children:[
      {
        path:'',
        component:MainComponent
      },
      {
        path:'excercise',
        component:ExcerciseComponent
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
    ExcerciseComponent,
    MainComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ColorPickerModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
