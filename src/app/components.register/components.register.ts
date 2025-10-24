import { Component } from '@angular/core';
import { ComponentService } from '../component.service/component.service';
import { RegisterRequestDto } from '../model/register-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components.register',
  standalone: false,
  templateUrl: './components.register.html',
  styleUrl: './components.register.css',
})
export class ComponentsRegister {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private service: ComponentService, private router: Router) {}

  onRegister() {
    this.errorMessage = '';

    const registerData: RegisterRequestDto = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.email,
      password: this.password,
      roles: ['Reader'] // default role, adjust as needed
    };

    this.service.register(registerData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        // Show browser alert
        alert('Registration successful! You can now log in.');

        // Clear input fields
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';

        // Redirect to login page
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message; // show backend error if exists
        } else {
          this.errorMessage = 'Registration failed. Please check your input.';
        }
      }
    });
  }
}
