import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  
  videos:any;
 
  constructor(private youtube:YoutubeService, private sanitizer:DomSanitizer,public authService:AuthService) {
  }

 ngOnInit(): void {
   // this.youtube.getPlaylist().subscribe((data)=>{
   //   console.log(data);
   //   this.videos = data.items;
   // });
   console.log(this.authService)
 }

}
