import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Effettua la verifica dell'utente con il backend del server
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  get isLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }
}
