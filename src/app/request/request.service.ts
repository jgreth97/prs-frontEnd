import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from './request.class'
import {Observable} from 'rxjs';
const baseurl: string = "http://localhost:8080/api/requests/";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http:HttpClient){}

    reject(req:Request): Observable<Request>{
      return this.http.put(`${baseurl}reject`, req) as Observable<Request>;
    }
    approve(req: Request): Observable<Request>{
      return this.http.put(`${baseurl}approve`,req) as Observable<Request>;
    }
    review(req:Request): Observable<Request>{
      return this.http.put(`${baseurl}review`, req) as Observable<Request>;
    }
    requests(id: number): Observable<Request[]>{
      return this.http.get(`${baseurl}review/${id}`) as Observable<Request[]>;
    }
    list(): Observable<Request[]>{
      return this.http.get(`${baseurl}`) as Observable<Request[]>;
    }
    get(id:Number):Observable<Request>{
      return this.http.get(`${baseurl}${id}`) as Observable<Request>;
    }
    create(request:Request): Observable<Request>{
      return this.http.post(`${baseurl}`,request) as Observable<Request>;
    }
    change(request:Request): Observable<Request>{
      return this.http.put(`${baseurl}${request.id}`,request) as Observable<Request>;
    }
    remove(request:Request): Observable<Request>{
      return this.http.delete(`${baseurl}${request.id}`) as Observable<Request>;
    }
  }
