import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@app/environments/environment';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const token = new URLSearchParams(location.hash.substring(1)).get(
      'access_token'
    );
    if (token) {
      this.authService.login(token);
      this.router.navigate(['/']);
    }
  }

  login(): void {
    window.location.href = `${environment.VITE_AUTH_ENDPOINT}?client_id=${environment.VITE_CLIENT_ID}&redirect_uri=${environment.VITE_REDIRECT_URI}&response_type=token`;
  }
}
