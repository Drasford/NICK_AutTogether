import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { AuthService } from 'app/services/auth.service';
import {ColorService} from '../../services/color.service';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable, merge } from 'rxjs';

import { AngularFirestore, QueryDocumentSnapshot } from '@angular/fire/firestore';
import * as firebase from 'firebase';


import {Comment} from '../../Models/comment'
import {DatabaseService} from '../../services/database.service'

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {   
  database = firebase.database();
  comments:Comment[]
  comments1:Comment[];
  comments2:Comment[];
  komentar:string;
  komentar1:string
  komentar2:string;
  constructor(private databaseService:DatabaseService,public authService:AuthService,public colorService:ColorService,private db:AngularFirestore, private data:AngularFireDatabase) { }

 ngOnInit(): void {
 
    this.databaseService.getComments().subscribe(coms=>{
      this.comments1 = coms.filter(p=>p.videoID==1);
      this.comments2 = coms.filter(p=>p.videoID==2)
    })

 }

 addComment(videoID:number){
  this.db.collection('users').add({
    name:this.authService.currentUserName,
    message:this.komentar,
    videoID:videoID,
    img:this.chooseImg()
  })
  this.komentar="";
 }

 chooseImg():string{

  if (this.authService.currentUserName === "test@test.com") {
    return "./../../../assets/img/inteli.PNG"
  }
  else{
    return "./../../../assets/img/python.PNG"
  }
 }

 chooseMessage(videoID:number){
  if(videoID==1){
    return this.komentar1
  }
  else{
    return this.komentar2
  }
 }

}
