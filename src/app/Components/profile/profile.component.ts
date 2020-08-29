import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService:AuthService, public colorService:ColorService) { }

  ngOnInit(): void {
  }

}
