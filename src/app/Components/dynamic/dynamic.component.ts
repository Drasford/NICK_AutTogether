import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'app/services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorService } from 'app/services/color.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  videos:any;
  heroes = ["Dame","Cece","Mice","Gice"];

  constructor(private youtube:YoutubeService, private sanitizer:DomSanitizer, public colorService:ColorService, public authService:AuthService) { }

   ngOnInit(): void {
    // this.youtube.getPlaylist().subscribe((data)=>{
    //   console.log(data);
    //   this.videos = data.items;
    // });
  }

}
