import * as moment from 'node_modules/moment/moment'

export class FullUser {

  private id: string;
  private realname: string;
  private username: string;
  private password: string;
  private singingUpDate: string;
  private email: string;
  private continent: string;
  private gender: string;
  private upto18: boolean;

  constructor() {
    this.id = this.uniqueId();
    this.realname = '';
    this.username = '';
    this.password = '';
    this.singingUpDate = moment().format('DD-MM-YYYY');
    this.email = '';
    this.continent = '';
    this.gender = '';
    this.upto18 = true;
  }

  // setters

  public setRealname(realname) {
    this.realname = realname;
  }

  public setUsername(username) {
    this.username = username;
  }

  public setPassword(password) {
    this.password = password;
  }

  public setEmail(email) {
    this.email = email;
  }

  public setContinent(continent) {
    this.continent = continent;
  }

  public setGender(gender) {
    this.gender = gender;
  }

  public setUpto18(upto18) {
    this.upto18 = upto18;
  }

  // getters

  public getId() {
    return this.id;
  }

  public getRealName() {
    return this.realname;
  }

  public getUsername() {
    return this.username;
  }

  public getPassword() {
    return this.password;
  }

  public getSingingUpDate() {
    return this.singingUpDate;
  }

  public getEmail() {
    return this.email;
  }

  public getContinent() {
    return this.continent;
  }

  public getGender() {
    return this.gender;
  }

  public getSetUpto18() {
    return this.setUpto18;
  }

  // Generamos id único

  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }

  // Obtenemos fecha actual

}
