import { Component, OnInit } from '@angular/core';
import { FullUser } from '../../shared/classes/full-user';

@Component({
  selector: 'amf-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit {

  public User;

  public placeholders = {
    realname: 'Introduce tu nombre y apellidos',
    username: 'Introduce tu nombre de usuario',
    userpass: 'Introduce tu contraseña',
    userconfirmpass: 'Repite tu contraseña',
    email: 'Introduce tu email'
  };

  public userData = {
    realname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    continent: '0',
    gender: 'H',
    upTo18: false
  };

  public genders = {
    H: {
      label: 'Hombre',
      id: 'gender_H',
      value: 'H',
      name: 'genderOption',
      checked: true
    },
    M: {
      label: 'Mujer',
      id: 'gender_M',
      value: 'M',
      name: 'genderOption',
      checked: false
    }
  };

  public continents = [
    {
      value: '0',
      text: 'Selecciona continente',
      selected: true,
      disabled: true
    },
    {
      value: 'EU',
      text: 'Europa',
      selected: false,
      disabled: false
    },
    {
      value: 'AM',
      text: 'América',
      selected: false,
      disabled: false
    },
    {
      value: 'AF',
      text: 'África',
      selected: false,
      disabled: false
    },
    {
      value: 'AS',
      text: 'Asia',
      selected: false,
      disabled: false
    },
    {
      value: 'OC',
      text: 'Oceanía',
      selected: false,
      disabled: false
    }
  ];

  botonDesactivado = true;

  checkButton() {
    this.botonDesactivado = (
      this.userData.realname === '' ||
      this.userData.username === '' ||
      this.userData.password === '' ||
      this.userData.confirmPassword === '' ||
      this.userData.password !== this.userData.confirmPassword ||
      this.userData.email === '' ||
      this.userData.continent === '0' ||
      this.userData.upTo18 === false
    );
  }

  constructor() { }

  saveUser() {
    this.User = new FullUser();
    this.User.setRealname(this.userData.realname);
    this.User.setUsername(this.userData.username);
    this.User.setPassword(this.userData.password);
    this.User.setEmail(this.userData.email);
    this.User.setContinent(this.userData.continent);
    this.User.setGender(this.userData.gender);
    this.User.setUpTo18(this.userData.upTo18);
  }

  ngOnInit() {
  }

}
