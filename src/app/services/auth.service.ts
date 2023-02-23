import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private get accessToken(): string {
    return localStorage.getItem('access_token') ?? '';
  }

  private set accessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  isAuth(): boolean {
    const token = this.accessToken // localStorage.getItem('access_token');
    return token !== '';
  }

  login(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
