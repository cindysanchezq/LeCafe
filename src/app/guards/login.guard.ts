import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private generalService: GeneralService, private router: Router) {}

  canActivate(): boolean {
    const user = this.generalService.getUser();
    if (!user) {
      return true; 
    } else {

      this.router.navigate(['/home']); 
      return false;
    }
  }
}
