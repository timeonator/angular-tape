import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Tape } from '../models/Tape';
@Injectable({
  providedIn: 'root'
})
export class TapeService {
    tapesUrl:string = 'https://my-json-server.typicode.com/timeonator/tapes/tapes';

  constructor(private http:HttpClient) { }

  getTapes(): Observable<Tape[]> {
      return this.http.get<Tape[]>(this.tapesUrl);
  }
}
