import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "../../models/account/user/user-request-model";
import { AppConfig } from "../../app.config";
@Injectable({
  providedIn:'root'
})

export class UserService  {
  private apiUrl = `${AppConfig.apiUrl}/User`;

  constructor(private http: HttpClient) { }

  public CreateUpdate(model: UserRequest): any{
    const url = `${this.apiUrl}/CreateUpdate`;
    return this.http.post<any>(url,{model : model});
  }
}
