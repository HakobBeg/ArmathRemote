import { Component, OnInit } from '@angular/core';
import {navbarAnimationtrigger} from '../../Animations/simpleAnimations';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [navbarAnimationtrigger]
})
export class NavBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
