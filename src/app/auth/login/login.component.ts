import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public AuthService: AuthService  ) { }

  ngOnInit() {

  }

  onSubmit( data: any ) {
    console.log(data);

    this.AuthService.login( data.email, data.password );

  }

}
