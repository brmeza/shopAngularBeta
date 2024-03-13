import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { MyApiService } from '../services/my-api.service';
import { IProduct } from '../model/product.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-catalgo',
    templateUrl: './catalgo.component.html',
    styleUrls: ['./catalgo.component.css'],
})
export class CatalgoComponent implements OnInit {
    productList: any[] = [];
    categoriaEntrada: string = 'catalgo completo';
    constructor(private _api: MyApiService) { }

    ngOnInit(): void {
        this._api.enviarCategoria.subscribe((categoriaEntrada) => {
            this.categoriaEntrada = categoriaEntrada;
            // Lógica para manejar la categoría de entrada
            if (this.categoriaEntrada === 'electronics') {
                this.cambioDeCategoria('electronics');
            } else if (this.categoriaEntrada === 'jewelery') {
                this.cambioDeCategoria('jewelery');
            } else if (this.categoriaEntrada === `women's clothing`) {
                this.cambioDeCategoria(`women's clothing`);
            } else if (this.categoriaEntrada === `men's clothing`) {
                this.cambioDeCategoria(`men's clothing`);
            } else if (this.categoriaEntrada === 'catalgo completo') {
                this._api.getAllProducts().subscribe((data: IProduct[]) => {
                    console.log(data);
                    this.productList = data;
                });
            } else {
                this._api.getAllProducts().subscribe((data: IProduct[]) => {
                    console.log(data);
                    this.productList = data;
                });
            }
        });
    }

    cambioDeCategoria(categoria: string) {
        this._api.getCategoria(categoria).subscribe((data: IProduct[]) => {
            console.log(data);
            this.productList = data;
        });
    }
}
