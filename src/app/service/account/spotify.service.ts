import { HttpClient,HttpResponse  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfig } from "src/app/app.config";

@Injectable({
  providedIn:'root'
})
export class SpotifySerice{
  private apiUrl = `${AppConfig.apiUrl}/Spotify`

  constructor(private http: HttpClient){}

  public getCode(){
    const url = `${this.apiUrl}/GetUrlForCode`;
    return this.http.get(url,{ responseType: 'text' });
  }
}
