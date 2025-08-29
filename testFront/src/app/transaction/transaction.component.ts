// transaction.component.ts
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TrransactionService } from '../services/trransaction.service';
import { Transaction } from '../models/transaction';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  standalone: true,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
  imports: [FormsModule, MatIconModule, HttpClientModule],
  providers: [TrransactionService],
})
export class TransactionComponent implements OnInit {
  searchTerm = '';
  filterBy = 'Date';
  currentPage = 1;
  totalPages = 10;
  pages = [1, 2, 3, 4, 5];
  transacService = inject(TrransactionService);
  router = inject(Router);
  transactions: Transaction[] = [];
  filteredTransactions: any[] = [];
  //authService = inject(AuthService);
  user!: User;
  constructor() {}

  filterTransactions() {
    this.filteredTransactions = this.transactions.filter((transaction) =>
      transaction.description
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
  ngOnInit(): void {
    //this.user = this.authService.getCurrentUser();
    this.transacService
      .getTransaction()
      .subscribe((transaction) => (this.transactions = transaction));
    this.filteredTransactions = [...this.transactions];
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
