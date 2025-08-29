// login.component.ts
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service'; // Injecte le service AuthService
import { NgIf } from '@angular/common'; // Ajouté pour le template

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, MatIconModule, HttpClientModule, NgIf], // Ajoute NgIf
  providers: [AuthService], // Fournit le service AuthService
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorLogin!: boolean;
  Loginempty!: boolean;
  authService = inject(AuthService); // Injecte AuthService
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }
  ngOnInit(): void {} // Pas besoin de charger tous les utilisateurs ici
  onSubmit() {
    if (this.loginForm.valid) {
      this.Loginempty = false;
      const { username, password } = this.loginForm.value;
      // Utilise le service d'authentification
      this.authService.login({ username, password }).subscribe({
        next: (user) => {
          // Si la connexion réussit
          console.log('Connexion réussie:', user);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          // Si la connexion échoue
          console.error('Erreur de connexion:', err);
          this.errorLogin = true;
        },
      });
    } else {
      this.Loginempty = true;
    }
  }
}
