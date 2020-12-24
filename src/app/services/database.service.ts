import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Comment} from '../Models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  commentsCollection:AngularFirestoreCollection<Comment>;
  comments:Observable<Comment[]>
  
  constructor(public afs:AngularFirestore) { 
    this.comments = this.afs.collection('users').valueChanges();
  }

  getComments(){
    return this.comments;
  }
}
