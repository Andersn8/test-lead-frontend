import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TrransactionService {
  constructor(private http: HttpClient) {}
  getTransaction() {
    return this.http.get<Transaction[]>('http://localhost:3000/transactions');
  }
}
