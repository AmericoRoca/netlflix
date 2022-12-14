import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'netflix';
  public user: User;
  public identity: boolean=true;
  public token: string = 'blalgbla';

  constructor(
    private _userService: UserService
  ){
    this.user = new User('','','','','','ROLE_USER','');
  }

  ngOnInit(){
    
  }

  public onSubmit(){
    /*this._userService.singUp(this.user).subscribe(
      response => {
        console.log(response);
      }, 
      error =>{
        var errorMessage = <any>error;
        if(errorMessage != null){
          console.log(error);
        }
      }
    );*/

  }

}
