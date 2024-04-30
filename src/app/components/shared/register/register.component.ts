import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  adminUser: any = {
    email: 'admin@admin.com',
    password: '1234567',
    role: 'admin',
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [
        '',
        [Validators.required, this.compararPassword.bind(this)],
      ],
    });
  }

  compararPassword(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const passwordControl = this.registerForm
      ? this.registerForm.get('password')
      : null;
    const password = passwordControl ? passwordControl.value : null;
    const confirmPassword = control.value;

    // Si las contraseñas no coinciden, devolvemos un error
    if (password && password !== confirmPassword) {
      return { noCoincide: true };
    }
    return null;
  }

  onSubmit() {
    const { username, password } = this.registerForm.value;
    if (this.registerForm.valid) {
      if (
        username === this.adminUser.email &&
        password === this.adminUser.password
      ) {
        localStorage.setItem('usuario', JSON.stringify(this.adminUser));
        Swal.fire('¡Registro exitoso!', '¡Bienvenido!', 'success');
        // Aquí podrías redirigir al usuario a una página especial para administradores
      } else {
        localStorage.setItem(
          'usuario',
          JSON.stringify({ username: username, role: 'simple' })
        );
        Swal.fire('¡Registro exitoso!', '¡Bienvenido!', 'success');
        this.router.navigate(['/home']);
        // Aquí podrías redirigir al usuario a la página principal o a su panel de usuario
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
