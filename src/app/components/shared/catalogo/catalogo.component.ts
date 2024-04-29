import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  submit(event:any){
    event.preventDefault();
    Swal.fire("Producto Agregado");
  }

}
