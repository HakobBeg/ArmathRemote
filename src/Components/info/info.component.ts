import { Component, OnInit } from '@angular/core';
import {showAnimation} from '../../Animations/simpleAnimations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [showAnimation]
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
