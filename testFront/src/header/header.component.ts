import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../app/models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  istransactiondval!: boolean;
  isvirementval!: boolean;
  isdashboardval!: boolean;
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
  user!: User;
  router = inject(Router);

  // authService = inject(AuthService);

  constructor() {}
  ngOnInit(): void {
    this.isdashboardval = true;
  }
  logout() {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }
}
