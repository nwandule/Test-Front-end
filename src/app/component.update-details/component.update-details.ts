import { Component } from '@angular/core';
import { ComponentService } from '../component.service/component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component.update-details',
  standalone: false,
  templateUrl: './component.update-details.html',
  styleUrl: './component.update-details.css',
})
export class ComponentUpdateDetails {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: ComponentService, private router: Router) {
    // optionally, load existing user data from backend
    const token = localStorage.getItem('token');
    if (token) {
      this.service.getUserDetails(token).subscribe({
        next: (user) => {
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.username;
        },
        error: (err) => console.error('Failed to load user data', err)
      });
    }
  }

  onUpdate() {
    this.errorMessage = '';
    this.successMessage = '';

    const updatedData = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.email
    };

    this.service.updateUserDetails(updatedData).subscribe({
      next: (res) => {
        this.successMessage = 'Details updated successfully!';
        alert('Details updated successfully!');
      },
      error: (err) => {
        console.error('Update failed', err);
        this.errorMessage = 'Failed to update details.';
      }
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
