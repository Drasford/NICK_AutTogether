import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any = null;
  isAuth:boolean = false;
  isTrulyAuth:boolean = false;

  constructor(private afu: AngularFireAuth,private router:Router) {
    this.afu.authState.subscribe((auth=>{
      this.authState = auth;
    }))
   }

   get authenticated():boolean{
     return this.authState !==null;
   }

   get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

   registerWithEmail(email:string,password:string){
     return this.afu.createUserWithEmailAndPassword(email,password).then((user)=>{
       this.authState = user;
       this.router.navigate(['/main'])
     }).catch(error=>{
       console.log(error)
       throw error
     })
   }

   loginWithEmail(email:string,password:string){
     return this.afu.signInWithEmailAndPassword(email,password).then((user)=>{
       localStorage.setItem('Authenticated','Bla');
      this.authState = user
     }).catch(error=>{
       console.log(error);
       throw error;
     })
   }

   signOut(): void{
     this.afu.signOut();
     localStorage.clear();
     this.router.navigate(['']);
   }
}
