import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  adminUser: any = {
    email: 'admin@admin.com',
    password: '1234567',
    role: 'admin',
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['admin@admin.com', [Validators.required, Validators.email]],
      password: ['1234567', Validators.required],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      if (
        email === this.adminUser.email &&
        password === this.adminUser.password
      ) {
        localStorage.setItem('usuario', JSON.stringify(this.adminUser));
        this.router.navigate(['/admin']);
      } else {
        localStorage.setItem(
          'usuario',
          JSON.stringify({ email: email, role: 'simple' })
        );
        this.router.navigate(['/home']);
      }
    } else {
      Swal.fire(
        '¡Error!',
        'Por favor, complete todos los campos correctamente.',
        'error'
      );
    }
  }
}
