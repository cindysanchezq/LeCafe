import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent {
  productos: any[] = [];
  usuario: any = null;

  constructor(private generalService: GeneralService) {
    this.productos = this.generalService.getProducs();
    this.usuario = this.generalService.getUser();
  }

  agregarProducto(producto: any) {
    this.generalService.addToCart(producto);
  }
}
