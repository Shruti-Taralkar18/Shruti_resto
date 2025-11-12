import { Injectable } from '@angular/core';
const TOKEN='token';
const USER='user';
@Injectable({
  providedIn: 'root',
})
export class Storage {
  constructor() {}
  static saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  static saveUser(user:any):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }
}

