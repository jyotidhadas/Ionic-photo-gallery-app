import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  getData(){
   const url = `${this.apiUrl}`;
   return this.http.get(url);
  };
}
