import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/main']);
  }

}
