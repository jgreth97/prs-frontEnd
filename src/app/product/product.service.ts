import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.class'
import {Observable} from 'rxjs';
const baseurl: string = "http://localhost:8080/api/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient){
    } 
    list(): Observable<Product[]>{
      return this.http.get(`${baseurl}`) as Observable<Product[]>;
    }
    get(id:Number):Observable<Product>{
      return this.http.get(`${baseurl}${id}`) as Observable<Product>;
    }
    create(product:Product): Observable<Product>{
      return this.http.post(`${baseurl}`,product) as Observable<Product>;
    }
    change(product:Product): Observable<Product>{
      return this.http.put(`${baseurl}${product.id}`,product) as Observable<Product>;
    }
    remove(product:Product): Observable<Product>{
      return this.http.delete(`${baseurl}${product.id}`) as Observable<Product>;
    }
  }
