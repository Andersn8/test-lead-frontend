// transaction.component.ts
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TrransactionService } from '../services/trransaction.service';
import { Transaction } from '../models/transaction';

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
  transactions: Transaction[] = [];
  filteredTransactions: any[] = [];

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
    this.transacService
      .getTransaction()
      .subscribe((transaction) => (this.transactions = transaction));
    this.filteredTransactions = [...this.transactions];
  }
}
