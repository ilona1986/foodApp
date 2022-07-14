import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(
    private http: HttpClient,
  ) { }

  get(params: Request): Observable<ArrayBuffer> {
    return this.http.get<ArrayBuffer>(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5e2ba88da6374c6f9858b58fbea37610`, params);
  }
}
export interface Request {
  headers?: HttpHeaders,
}
