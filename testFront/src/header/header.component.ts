import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../app/models/user';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  istransactiondval!: boolean;
  isvirementval!: boolean;
  isdashboardval!: boolean;

  user!: User;
  router = inject(Router);
  authService = inject(AuthService);
  isLoggedIn!: boolean;

  private userSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    // S'abonner aux changements de l'utilisateur actuel
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = !!user;
    });

    this.isdashboardval = true;
  }

  ngOnDestroy(): void {
    // Désabonnement pour éviter les fuites mémoire
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  isvirement() {
    this.isvirementval = true;
    this.istransactiondval = false;
    this.isdashboardval = false;
  }

  istransaction() {
    this.isvirementval = false;
    this.istransactiondval = true;
    this.isdashboardval = false;
  }

  isdashboard() {
    this.isvirementval = false;
    this.istransactiondval = false;
    this.isdashboardval = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
