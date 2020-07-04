import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  message="";
  errorMessage="";
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  clearMessage(){
    this.errorMessage ="";
    this.error = {name:"",message:''};
  }

  register(){
    this.clearMessage()
    if (this.validateForm(this.email, this.password)) {
      this.authService.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "you are register with data on firbase"
          this.router.navigate([''])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }
  }

  validateForm(email,password){
    if(email.lenght === 0){
      this.errorMessage = "Please enter email";
      return false;
    }
    if(password.lenght === 0){
      this.errorMessage = "Please enter password";
      return false;
    }
    if(password.lenght < 6){
      this.errorMessage = "Password must be at least 6 characters";
      return false;
    }

    this.errorMessage="";
    return true;
  }

}
