// dashboard.component.ts
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [MatIconModule],
})
export class DashboardComponent {
  accounts = [{ name: 'Adriana Bart' }];
  router = inject(Router);
  authService = inject(AuthService);
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
