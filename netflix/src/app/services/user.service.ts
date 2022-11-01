import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;


  constructor(private _http: HttpClient) { 
    this.url= GLOBAL.url;
  }

  singUp(){
    return 'Hola mundo desde el servicio';
  }
}
