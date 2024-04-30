import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(private generalService: GeneralService, private router: Router) {}

  canActivate(): boolean {
    const user = this.generalService.getUser();
    if (user && user.role === 'admin') {
      this.router.navigate(['/admin']); 
      return false;
    } else {
      return true; 
    }
  }
}
