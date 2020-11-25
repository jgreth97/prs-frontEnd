import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from './user.class';
import {Observable} from 'rxjs';
const baseurl: string = "http://localhost:8080/api/users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient){
    } 
    list(): Observable<User[]>{
      return this.http.get(`${baseurl}`) as Observable<User[]>;
    }
    get(id:Number):Observable<User>{
      return this.http.get(`${baseurl}${id}`) as Observable<User>;
    }
    create(user:User): Observable<User>{
      return this.http.post(`${baseurl}`,user) as Observable<User>;
    }
    change(user:User): Observable<User>{
      return this.http.put(`${baseurl}${user.id}`,user) as Observable<User>;
    }
    remove(user:User): Observable<User>{
      return this.http.delete(`${baseurl}${user.id}`) as Observable<User>;
    }
    login(username: string, password: string): Observable<User>{
      return this.http.get(baseurl+username + '/'+ password) as Observable<User>;
    }

  }

