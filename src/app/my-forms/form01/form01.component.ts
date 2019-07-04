import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amf-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

  // para pasar datos de la lógica a la vista: binding de propiedades -> []
  // para pasar datos de la vista a la lógica: binging de eventos -> ()

  public getUsername = '';
  public getPassword = '';

  placeholders = { // objeto con dos propiedades que incluimos en la vista mediante el binding [placeholders]
    username: 'Introduce tu nombre de usuario',
    userpass: 'Introduce tu contraseña'
  };

  constructor() { }

  getData(username, password) {
    this.getUsername = username.value;
    this.getPassword = password.value;
  }

  ngOnInit() {
  }

}
