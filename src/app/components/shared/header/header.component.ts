import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  elementosCartSubscription!: Subscription;
  @Input() title: string = '';
  @Input() headerImage: string = '';

  user: any;
  elementos: any[] = [];

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getElementsCart();
    this.user = this.generalService.getUser();
    this.elementosCartSubscription =
      this.generalService.elementosCart$.subscribe((elements) => {
        console.log(elements);
        this.elementos = elements;
      });
  }

  ngOnDestroy(): void {
    this.elementosCartSubscription.unsubscribe();
  }

  deleteItem(id: string) {
    this.generalService.removeFromCart(id);
  }

  getTotal() {
    return this.elementos.reduce((total, item) => total + item.precio, 0);
  }

  pagar() {
    if (this.elementos.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Carrito vacío',
        text: 'Aún no has agregado elementos al carrito.',
        confirmButtonText: 'Ok'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Gracias por su compra!',
        html: '<p>En <strong>5 minutos</strong> su pedido llegará en helicóptero.</p>',
        confirmButtonText: 'Ok'
      });
    }
  }

  logout() {
    this.generalService.logout();
  }
}
