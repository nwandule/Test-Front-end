import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-component.guard-auth',
  standalone: false,
  templateUrl: './component.guard-auth.html',
})
export class ComponentGuardAuth {
 constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token'); // check if user is logged in
    if (token) {
      return true; // allow access
    } else {
      alert('You must be logged in to access this page');
      this.router.navigate(['/']); // redirect to login
      return false;
    }
  }
}
