import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canMatch(): boolean {
    if (!this.authService.userIsAuthenticated) {
      this?.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }
}
