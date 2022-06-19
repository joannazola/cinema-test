import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = "http://localhost:3000/movies";
  private urlPreorders ="http://localhost:3000/preorders"

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get(this.url);
  }
  getPreorders(){
    return this.httpClient.get(this.urlPreorders)
  }
}
