import { Component } from '@angular/core';
import { ComponentService } from '../component.service/component.service';
import { LoginRequestDto } from '../model/login-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component.login',
  standalone: false,
  templateUrl: './component.login.html',
  styleUrl: './component.login.css',
})
export class ComponentLogin {

email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private service: ComponentService, private router: Router) {}

  onLogin() {
  const loginData: LoginRequestDto = {
    username: this.email,
    password: this.password
  };

  this.service.login(loginData).subscribe({
    next: (response) => {
      console.log('Login successful:', response);

      // Store JWT token in localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('username', this.email);
      localStorage.setItem('loginTime', new Date().toISOString());
      // Redirect to update details page
        this.router.navigate(['/update-details']);
     
    },
    error: (err) => {
      console.error('Login failed:', err);
      this.errorMessage = 'Invalid username or password';
    }
  });
}


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Optional: method to logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
