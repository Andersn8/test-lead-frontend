// dashboard.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [MatIconModule],
})
export class DashboardComponent implements OnInit {
  accounts = [
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
    { name: 'Adriana Bart' },
  ];
  user!: User;
  router = inject(Router);
  // authService = inject(AuthService);
  logout() {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    //this.user = this.authService.getCurrentUser();
  }
}
