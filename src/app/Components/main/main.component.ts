import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {ColorService} from './../../services/color.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // tabColor="#ba014b";

  constructor(public authService:AuthService,public colorService: ColorService, private afAuth:AngularFireAuth) { 
    // this.afAuth.onAuthStateChanged((user)=>{
    //   if(user){
    //     console.log('logiran');
    //   }
    //   else{
    //     console.log('odlogiran');
    //   }
    // })
  }

  ngOnInit(): void {
    console.log(this.authService)
  }

}
