import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {ColorService} from '../../services/color.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  
  panelOpenState = false;
  // tabColor ="#ba014b"

  constructor(private youtube:YoutubeService, private sanitizer:DomSanitizer,public colorService:ColorService) {
   }

  // ngOnInit(): void {
  //   // this.youtube.getPlaylist().subscribe((data)=>{
  //   //   console.log(data);
  //   //   this.videos = data.items;
  //   // });
    
  // }


}
