// login.component.ts
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// 1. Importe le MatIconModule
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';
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
  AllUser: User[] = [];
  errorLogin!: boolean;
  Loginempty!: boolean;
  userService = inject(UserService);
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }
  ngOnInit(): void {
    this.userService.getUserAll().subscribe((user) => (this.AllUser = user));
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.Loginempty = false;
      const usernameValue = this.loginForm.get('username')?.value;
      const passwordValue = this.loginForm.get('password')?.value;

      // Simulate login
      this.AllUser.forEach((element) => {
        if (
          usernameValue == element.username &&
          passwordValue == element.password
        ) {
          this.router.navigate(['/dashboard']);
          // this.authService.login({ usernameValue, passwordValue }).subscribe();
        } else {
          this.errorLogin = true;
        }
      });
    } else {
      this.Loginempty = true;
    }
  }
}
