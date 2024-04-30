import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private _elementosCartSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  public elementosCart$: Observable<any[]> =
    this._elementosCartSubject.asObservable();
  private _user: any;
  private imagenes = [
    './assets/img/productos/producto_1.jpeg',
    './assets/img/productos/producto_2.jpg',
    './assets/img/productos/producto_3.jpg',
    './assets/img/productos/producto_4.jpg',
    './assets/img/productos/producto_5.jpg',
    './assets/img/productos/producto_6.jpg',
  ];

  private productos = [
    {
      id: 'f2863984-5205-4a1f-a7cc-16d430b14148',
      nombre: 'Capuccino',
      precio: 10000,
      descripcion:
        'Sumérgete en el placer de nuestro cappuccino: una mezcla perfecta de café, espuma de leche y dulzura. Una experiencia que deleitará       tus sentidos y te transportará a Italia en cada sorbo. ',
      img: './assets/img/productos/producto_1.jpeg',
    },
    {
      id: 'a1bd0b0c-df19-4799-8940-f3e163c9aa43',
      nombre: 'Avocado toast',
      precio: 25000,
      descripcion:
        'Disfruta de nuestras tostadas sin gluten con aguacate y tomate: una combinación deliciosa y saludable que te hará sentir bien. Sabores frescos y texturas crujientes en cada bocado.',
      img: './assets/img/productos/producto_2.jpg',
    },
    {
      id: '63f6c73c-3810-4efb-bfef-477aa0fd2e0d',
      nombre: 'Cafe frio latte',
      precio: 18000,
      descripcion:
        'Nuestro Café Frío Latte combina café espresso suave, leche fresca y un toque dulce, todo sobre hielo. La elección perfecta para los amantes del café en busca de una nueva experiencia.',
      img: './assets/img/productos/producto_3.jpg',
    },
    {
      id: '907787e7-5d0a-4e1a-8e36-7b8b6bb670fc',
      nombre: 'Crepas Miel',
      precio: 22000,
      descripcion:
        'Disfruta de nuestras crepas con miel de maple: suaves crepas rellenas y cubiertas con la dulzura natural y el aroma tentador de la miel de maple. Una combinación irresistible de texturas suaves',
      img: './assets/img/productos/producto_4.jpg',
    },
    {
      id: 'fe4a5e09-6c72-489c-89c4-5db41d8575a4',
      nombre: 'Overnight Oats',
      precio: 27000,
      descripcion:
        'Prueba nuestro irresistible café Dalgona: una mezcla cremosa de café instantáneo, azúcar y agua, batida hasta obtener una espuma deliciosa. Una experiencia que combina el amargor del café con lo dulce.',
      img: './assets/img/productos/producto_5.jpg',
    },
    {
      id: '04af133b-d157-4b62-9cbb-3a676fcad8fc',
      nombre: 'Cafe frio latte',
      precio: 12000,
      descripcion:
        'Prueba nuestro irresistible café Dalgona: una mezcla cremosa de café instantáneo, azúcar y agua, batida hasta obtener una espuma deliciosa. Una experiencia que combina el amargor del café con lo dulce.',
      img: './assets/img/productos/producto_6.jpg',
    },
  ];

  constructor(private router: Router) {
    const productosString = localStorage.getItem('productos');
    if (productosString) {
      this.productos = JSON.parse(productosString);
    } else {
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  public getUser(): any {
    const userString = localStorage.getItem('usuario');
    if (userString) {
      this._user = JSON.parse(userString);
    } else {
      this._user = null;
    }
    return this._user;
  }

  public getProducs() {
    return this.productos;
  }

  private getImageImage() {
    const index = Math.floor(Math.random() * this.imagenes.length);
    return this.imagenes[index];
  }

  public addProduct(product: any) {
    const newProduct = {
      ...product,
      id: uuidv4(), // Genera un nuevo UUID como id
      img: this.getImageImage(),
    };
    console.log(newProduct);
    this.productos.unshift(newProduct);
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  getOneProduct(id: string) {
    const producto = this.productos.find((item) => (item.id = id));
    if (producto) {
      return producto;
    }

    return null;
  }

  editProduct(updatedProduct: any) {
    const index = this.productos.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      this.productos[index] = { ...updatedProduct };
      localStorage.setItem('productos', JSON.stringify(this.productos));
    } else {
      console.error('Producto no encontrado');
    }
  }

  deleteProduct(productId: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.productos.findIndex(
          (product) => product.id === productId
        );
        if (index !== -1) {
          this.productos.splice(index, 1);
          localStorage.setItem('productos', JSON.stringify(this.productos));
          Swal.fire({
            icon: 'success',
            title: 'Producto Eliminado',
            text: 'El producto ha sido eliminado exitosamente.',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.error('Producto no encontrado');
        }
      }
    });
  }

  addToCart(product: any) {
    const carritoString = localStorage.getItem('carrito');

    let carrito: any[] = [];

    if (carritoString) {
      carrito = JSON.parse(carritoString);
    }

    const productoExistente = carrito.find((p: any) => p.id === product.id);
    if (productoExistente) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este producto ya está en el carrito',
      });
      return;
    }

    carrito.unshift(product);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    this._elementosCartSubject.next(carrito);
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      text: 'El producto se ha agregado correctamente al carrito',
    });
  }

  getElementsCart() {
    const carritoString = localStorage.getItem('carrito');

    if (carritoString) {
      const carrito = JSON.parse(carritoString);
      this._elementosCartSubject.next(carrito);
      return carrito;
    }

    return [];
  }

  public removeFromCart(productId: string) {
    let carrito: any[] = JSON.parse(localStorage.getItem('carrito') || '[]');
    const index = carrito.findIndex((product) => product.id === productId);

    if (index !== -1) {
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this._elementosCartSubject.next(carrito);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Producto no encontrado en el carrito.',
      });
    }
  }

  public logout(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrito');
    localStorage.removeItem('productos');
    this._user = null;
    this.router.navigate(['/login']);
  }
}
