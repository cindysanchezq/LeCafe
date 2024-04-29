import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  submit(event:any){
    event.preventDefault();
    Swal.fire("Reserva Enviada");
  }
}
