import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      Swal.fire(
        '¡Producto creado!',
        'El producto ha sido creado correctamente.',
        'success'
      );
      this.generalService.addProduct(this.productForm.value);
      this.productForm.reset();
      this.router.navigate(['/admin']);
    } else {
      Swal.fire(
        '¡Error!',
        'Por favor, complete todos los campos correctamente.',
        'error'
      );
    }
  }
}
