import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  videos:any;
  panelOpenState = false;
  tabColor ="#ba014b"

  constructor(private youtube:YoutubeService, private sanitizer:DomSanitizer) {
   }

  // ngOnInit(): void {
  //   // this.youtube.getPlaylist().subscribe((data)=>{
  //   //   console.log(data);
  //   //   this.videos = data.items;
  //   // });
    
  // }


}
