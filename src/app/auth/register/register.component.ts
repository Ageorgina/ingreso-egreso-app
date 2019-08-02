import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor( public AuthService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit( data: any ) {
    console.log(data);

    // centralizar auth
    this.AuthService.crearUsuario( data.nombre, data.email, data.password );

  }

}
