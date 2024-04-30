import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GeneralService } from '../../../general.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.scss'],
})
export class EditarAdminComponent implements OnInit {
  editForm!: FormGroup;
  user: any;
  productId: string = '';
  product: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
    });

    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id') || '';
      const product = this.generalService.getOneProduct(this.productId);
      if (product) {
        this.editForm.patchValue({
          nombre: product.nombre,
          descripcion: product.descripcion,
          precio: product.precio,
        });
        this.product = product;
      } else {
        Swal.fire('Error', 'Producto no encontrado', 'error');
      }
    });

    this.user = this.generalService.getUser();
  }

  onSubmit() {
    if (this.editForm.valid) {
      Swal.fire('Producto Editado');
      this.generalService.editProduct({
        ...this.product,
        ...this.editForm.value,
      });
      this.router.navigate(['/admin']);
    } else {
      Swal.fire(
        'Error',
        'Por favor, complete todos los campos correctamente.',
        'error'
      );
    }
  }
}
