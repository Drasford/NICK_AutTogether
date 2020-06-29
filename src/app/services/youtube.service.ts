import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getPlaylist():Observable<any>{
  
    const key = "AIzaSyDZ4yCa4iAjVTNjKyXHrcItA7gN98fbvEg";
    const playlistId = "PL-q2zlFV-lOQMknGMwuqu64sdTdLnH2Ol";

    const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId="+playlistId+"&key="+key;
    

    return this.http.get<any>(url)
  }
}
