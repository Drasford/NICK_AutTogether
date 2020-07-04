import { Component, OnInit } from '@angular/core';
import {ColorService} from '../../services/color.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {


  constructor(public colorService:ColorService) {
   }


}
