// dashboard.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [MatIconModule, HeaderComponent],
})
export class DashboardComponent {
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
}
