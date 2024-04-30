import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  productos: any[] = [];

  constructor(private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    this.productos = this.generalService.getProducs();
  }

  irEditar(id: string) {
    this.router.navigate(['/editar', id]);
  }
  borrarProducto(id: string) {
    this.generalService.deleteProduct(id);
  }
  logout() {
    this.generalService.logout();
  }
}
