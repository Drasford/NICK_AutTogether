import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(public authService:AuthService, public colorService:ColorService) { }

  ngOnInit(): void {
  }

}
