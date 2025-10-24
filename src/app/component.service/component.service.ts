import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequestDto } from '../model/login-request.model';
import { RegisterRequestDto } from '../model/register-request.model';

@Injectable({
  providedIn: 'root'  // ensures service is injectable throughout the app
})
@Component({
  selector: 'app-component.service',
  standalone: false,
  templateUrl: './component.service.html',
  styleUrl: './component.service.css',
})
export class ComponentService {

  private baseUrl = 'http://localhost:5153/api/Auth'; // your API base URL

  constructor(private http: HttpClient) { }

  // Login
  login(loginData: LoginRequestDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/Login`, loginData);
  }

  // Register
  register(registerData: RegisterRequestDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/Register`, registerData);
  }
  // Get user details
getUserDetails(token: string) {
  return this.http.get<any>(`${this.baseUrl}/GetUserDetails`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

// Update user details
updateUserDetails(data: any) {
  const token = localStorage.getItem('token');
  return this.http.put<any>(`${this.baseUrl}/UpdateDetails`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });}
}
