// dashboard.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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

  ngOnInit(): void {
    //this.user = this.authService.getCurrentUser();
  }
}
