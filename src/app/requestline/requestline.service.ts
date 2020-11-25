import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestLine } from '../requestline/requestline.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:8080/api/lines/";
@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  constructor(
    private http: HttpClient
  ) { }

  getLines(id: number): Observable<RequestLine[]>
  {
    return this.http.get(`${baseurl}for-req/${id}`) as Observable<RequestLine[]>;
  }

  list(): Observable<RequestLine[]>
  {
    return this.http.get(`${baseurl}`) as Observable<RequestLine[]>;
  }
  
  get(id: number): Observable<RequestLine>
  {
    return this.http.get(`${baseurl}${id}`) as Observable<RequestLine>;
  }

  create(reqLine: RequestLine): Observable<RequestLine>
  {
    return this.http.post(`${baseurl}`, reqLine) as Observable<RequestLine>;
  }

  change(reqLine: RequestLine): Observable<RequestLine>
  {
    return this.http.put(`${baseurl}${reqLine.id}`, reqLine) as Observable<RequestLine>;
  }

  remove(reqLine: RequestLine): Observable<RequestLine>
  {
    return this.http.delete(`${baseurl}${reqLine.id}`) as Observable<RequestLine>;

  }
}
