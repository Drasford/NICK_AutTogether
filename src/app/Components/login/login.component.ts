import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = ''; 
  error: { name: string, message: string } = { name: '', message: '' }; 
  

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => {
          this.authService.isAuth = true;
         this.router.navigate(['/main'])
        console.log(this.authService)
        }).catch(_error => {
          this.error = _error
          this.router.navigate([''])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = "password should be at least 6 characters";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
