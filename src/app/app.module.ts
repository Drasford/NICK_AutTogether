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

const routes=[
  {
    path:'',
    component:IntroComponent
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
    SafePipe
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
