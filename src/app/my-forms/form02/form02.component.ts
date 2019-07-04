import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'amf-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {

  // creamos un objeto de la clase User
  public user: User = new User();

  placeholders = { // objeto con dos propiedades que incluimos en la vista mediante el binding [placeholders]
    username: 'Introduce tu nombre de usuario',
    userpass: 'Introduce tu contraseña'
  };

  constructor() { }

  getData(formLogin, $event) {
    $event.preventDefault();
    this.user.setUsername(formLogin[0].value);
    this.user.setPassword(formLogin[1].value);
    formLogin.reset();
  }

  ngOnInit() {
  }

}
