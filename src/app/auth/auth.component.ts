import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  activeForm: string = 'Login'; // Tracks the active form
  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {
    // Initialize Login Form
    this.loginForm = this.fb.group({
      userName: ['', Validators.required], 
      password: ['', Validators.required]
    });

    // Initialize Sign Up Form
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      agreeToTerms: [false, Validators.requiredTrue] // Checkbox must be checked
    });
  }

  // Toggle between Login and Sign Up forms
  changeView(formName: string): void {
    this.activeForm = formName;
  }

  // Handle Login Form Submission
  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Form Data:', this.loginForm.value);
    } else {
      console.log('Login Form is invalid');
    }
    this.router.navigate(['/driver']);
  }

  // Handle Sign Up Form Submission
  onSignUpSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Sign Up Form Data:', this.signUpForm.value);
    } else {
      console.log('Sign Up Form is invalid');
    }
  }
}