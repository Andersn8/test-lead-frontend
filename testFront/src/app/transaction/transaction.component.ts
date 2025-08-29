// transaction.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
  imports: [FormsModule, MatIconModule],
})
export class TransactionComponent {
  searchTerm = '';
  filterBy = 'Date';
  currentPage = 1;
  totalPages = 10;
  pages = [1, 2, 3, 4, 5];

  transactions = [
    {
      _id: '45',
      date: '2025-07-12T09:22:00Z',
      montant: 25000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '4',
      date: '2025-07-12T09:22:00Z',
      montant: 2500000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '5',
      date: '2025-07-12T09:22:00Z',
      montant: 15000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '95',
      date: '2025-07-12T09:22:00Z',
      montant: 25000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '4005',
      date: '2025-07-12T09:22:00Z',
      montant: 25000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '000012',
      date: '2025-07-12T09:22:00Z',
      montant: 25000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
    {
      _id: '000005',
      date: '2025-07-12T09:22:00Z',
      montant: 25000,
      description: 'Salaire',
      monnaie: 'XAF',
    },
  ];

  filteredTransactions = [...this.transactions];

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
}
