import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../../models/account/auth/login-model";
import { AppConfig } from "../../app.config";
@Injectable({
  providedIn:'root'
})
export class AuthService {
  private apiUrl = `${AppConfig.apiUrl}/Authentication`;
  constructor(private http: HttpClient) { }

  public login(model : Login): any{
    const url = `${this.apiUrl}/Login`;
    return this.http.post<any>(url,{model : model});
  }

}
