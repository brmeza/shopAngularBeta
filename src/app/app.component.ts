import { Component, OnInit } from '@angular/core';
import { MyApiService } from './services/my-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'eShop';
  categoriaSalida = ""

  //Categorias
  electronics = 'electronics'
  jewelery = 'jewelery'
  women = `women's clothing`
  men = `men's clothing`

  constructor(private _api: MyApiService){}  

  cambioDeCategoria(categoria: string){
    this._api.cambioCat(categoria)
  }
  
}
