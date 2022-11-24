import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { get } from 'https';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;


  constructor(private _http: HttpClient) { 
    this.url= GLOBAL.url;
  }

  /*singUp(user_to_login, gethash= null){
    if(gethash != null){
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'login', params, {headers: headers});
            .map(res => res.json());
  }*/

}
