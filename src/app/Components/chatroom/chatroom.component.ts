import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(public authService:AuthService, public colorService:ColorService) { }

  ngOnInit(): void {
  }

}
