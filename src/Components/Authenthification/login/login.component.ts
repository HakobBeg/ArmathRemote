import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() navigateTo = 'home';

  hide = true;
  login: string;
  pass: string;

  constructor(public authService: AuthService) {
  }

  signIn() {
    this.authService.login(this.login, this.pass).then(() => this.authService.router.navigate([this.navigateTo])).catch((err) => {
      if (err.code === 'auth/invalid-email') {
        alert('Սխալ էլ․ հասցե, խնդրում ենք կրկին փորձել');
      }
      else if (err.code === 'auth/wrong-password') {
        alert('Սխալ գաղտնաբառ, խնդրում ենք կրկին փորձել');
      }

    });
  }


  ngOnInit() {
  }

}
