// virement.component.ts
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { VirementService } from '../services/virement.service';
import { Virement } from '../models/virement';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrl: './virement.component.scss',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, HttpClientModule],
  providers: [VirementService],
})
export class VirementComponent {
  virementForm: FormGroup;
  virementService = inject(VirementService);
  router = inject(Router);
  afficherAlerte = false;
  //authService = inject(AuthService);
  transactions: Virement[] = [];
  //  user!: User;
  constructor(private fb: FormBuilder) {
    this.virementForm = this.fb.group({
      compteSource: ['', Validators.required],
      description: ['', Validators.required],
      device: ['', Validators.required],
      numeroBeneficiaire: ['', Validators.required],
      montant: ['', [Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void {
    // this.user = this.authService.getCurrentUser();
  }
  onSubmit() {
    if (this.virementForm.valid) {
      this.virementService.addVirement(this.virementForm.value).subscribe();
      this.afficherAlerte = true;

      // 2. Définit un timer de 10 secondes (10000 ms)
      setTimeout(() => {
        // 3. Rend la div invisible après 10 secondes
        this.afficherAlerte = false;
      }, 5000);
    }
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
