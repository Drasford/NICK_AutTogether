import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tabColor="#ba014b";

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    console.log(this.authService)
  }

}