import { Routes } from '@angular/router';
import { VirementComponent } from './virement/virement.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'virement', component: VirementComponent },
];
