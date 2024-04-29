import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  submit(event:any){
    event.preventDefault();
    Swal.fire("Producto Eliminado");
  }
  

}
