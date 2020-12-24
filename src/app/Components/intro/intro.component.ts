import { Component, OnInit } from '@angular/core';
import {ColorService} from '../../services/color.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {


  constructor(public colorService:ColorService, private afAuth:AngularFireAuth) {
    // this.afAuth.onAuthStateChanged((user)=>{
    //   if(user){
    //     console.log('logiran');
    //   }
    //   else{
    //     console.log('odlogiran');
    //   }
    // })
   }


}
