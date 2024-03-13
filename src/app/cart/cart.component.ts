import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../services/my-api.service';
import { IProduct } from '../model/product.model';
import { UserCar } from '../model/User.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user? : UserCar;
  idProducts : any[]=[];
  listProduct: any[]=[]

  constructor(private _api: MyApiService){ }

  ngOnInit(): void {
    this._api.getCar().subscribe((data: UserCar) => {
      console.log(data);
      this.user = data;
      this.idProducts = data.products; // Asignar los productos con id del usuario al array de productos
      console.log(data.products);
  
      // Utilizamos una función de flecha para mantener el contexto de 'this'
      this.idProducts?.forEach((value) => {
        console.log(value)
        this._api.productIndividual(value).subscribe((data: IProduct) => {
          console.log(data);
          this.listProduct.push(data);
        });
      });
    });
  }

}
