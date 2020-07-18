import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

    
  getWeather(location){
    
    return this.http.get(
        // 'https://api.apixu.com/v1/current.json?key=bcfbe50550b28f473b869c7b6adffc61&q=' + location
        'https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=133f3e4dc739d1b74106fe0f8be544e6&query=' + location
    )
  }
}