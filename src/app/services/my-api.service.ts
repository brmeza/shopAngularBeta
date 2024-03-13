import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../model/product.model';
import { Product, UserCar } from '../model/User.model';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private categoria = new BehaviorSubject<string>(""); // BehaviorSubject para compartir datos
  enviarCategoria = this.categoria.asObservable();  // Observable para suscribirse a los cambios

  productList: any[]=[];
  private baseURL = 'https://fakestoreapi.com/products';
  private baseCar = 'https://fakestoreapi.com/carts';
  private electronics ='category/electronics';
  constructor(private _httpClient: HttpClient) { }

  //metodos
  //obtener todos los productos
  public getAllProducts(): Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(this.baseURL)
  }

  // public productIndividual(idProduct: number | string):Observable<IProduct>{
  //   return this._httpClient.get<IProduct>(`${this.baseURL}/${idProduct}`)
  // }
  public productIndividual(product: Product):Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseURL}/${product.productId}`)
  }


  //obtener categoriua especifica
  public getCategoria(nameCategory: string):Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(`${this.baseURL}/category/${nameCategory}`)
  }

  public cambioCat(categoria: string){
    this.categoria.next(categoria)
    
  }

  //proeductos del carrito

  public getCar(): Observable<UserCar>{
    return this._httpClient.get<UserCar>(`${this.baseCar}/1`)
  }

}
