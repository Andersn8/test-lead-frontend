// virement.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrl: './virement.component.scss',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule],
})
export class VirementComponent {
  virementForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.virementForm = this.fb.group({
      compteSource: ['', Validators.required],
      numeroBeneficiaire: ['', Validators.required],
      montant: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.virementForm.valid) {
      console.log('Virement Form Submitted:', this.virementForm.value);
      // Traiter le virement ici
    }
  }
}
