import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  submit(event:any){
    event.preventDefault();
    Swal.fire("Producto Creado");
  }
  

}
