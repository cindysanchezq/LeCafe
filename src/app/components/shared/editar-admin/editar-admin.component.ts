import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.scss']
})
export class EditarAdminComponent {

  submit(event:any){
    event.preventDefault();
    Swal.fire("Producto Editado");
  }
  

}
