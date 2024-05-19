import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadCtlr: LoadingController
  ) {}

  onLogin() {
    this.authService.login();
    this.isLoading = true;
    this.loadCtlr.create({keyboardClose: true, message: 'Logging in...'}).then(loadingEl=> {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    })
   
  }
}
