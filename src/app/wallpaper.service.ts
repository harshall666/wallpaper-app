import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WallpaperService {
  accessKey = '79vkcVZq1Q2XArFmKj93JKEXspns4kKbFiaZJz_tawY';
  constructor(private http: HttpClient) {}

  makePostRequest() {
    return this.http
      .get('https://api.unsplash.com/photos/random?client_id=' + this.accessKey + '&count=30')
      
  }
}
