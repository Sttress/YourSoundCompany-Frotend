import { Component,OnInit } from "@angular/core";
import { FormBuilder,FormControl,FormGroup ,Validators, ReactiveFormsModule } from '@angular/forms';
import { UserRequest } from "src/app/models/account/user/user-request-model";
import { AuthService } from "src/app/service/account/auth.service";
import { SpotifySerice } from "src/app/service/account/spotify.service";
import { UserService } from "src/app/service/account/user.service";
@Component({
  selector:'user-create',
  templateUrl:'user-create-page.html',
  styleUrls:['user-create-page.css']
})
export class UserCreatePage{

  public model: UserRequest = new UserRequest();
  public userForm!: FormGroup;

  constructor
  (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private spotifyService:SpotifySerice ){
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = new FormGroup({
      email: new FormControl('',
      [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',
      [
        Validators.required,
      ]),
      confirmPassword: new FormControl('',
      [
        Validators.required,
      ]),
      name: new FormControl('',
      [
        Validators.required,
      ])
    });
  }

  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  get confirmPassword(){
    return this.userForm.get('confirmPassword');
  }
  get name(){
    return this.userForm.get('name');
  }

  onSubmit(){
    this.model.email = this.email?.value;
    this.model.password = this.password?.value;
    this.model.confirmPassword = this.password?.value;
    this.model.name = this.password?.value;
    let response = this.userService.CreateUpdate(this.model);
  }

  async getAuthorizationSpotify(){
    try{
       await this.spotifyService.getCode().subscribe(result =>{
        console.log(result)
        window.location.href = result;

      })
    }catch(error){
      console.error('Erro ao obter URL de autorização do Spotify:', error);
    }
  }

}
