import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ReactiveFormsModule, MatIconModule, HttpClientModule],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorLogin!: boolean;
  Loginempty!: boolean;
  loginInProgress = false;

  userService = inject(UserService);
  authService = inject(AuthService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {
    // Vérifier si l'utilisateur est déjà connecté
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.Loginempty = false;
      this.errorLogin = false;
      this.loginInProgress = true;

      const credentials = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      // Utiliser directement le service d'authentification
      this.authService.login(credentials).subscribe({
        next: (user) => {
          this.loginInProgress = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Erreur de connexion:', error);
          this.errorLogin = true;
          this.loginInProgress = false;
        },
      });
    } else {
      this.Loginempty = true;
    }
  }
}
