import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ColorService } from 'app/services/color.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(public authService:AuthService, public colorService:ColorService) { }

  ngOnInit(): void {
  }

}
