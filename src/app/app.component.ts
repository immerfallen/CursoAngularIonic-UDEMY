import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
