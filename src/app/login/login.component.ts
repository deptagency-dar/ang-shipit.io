import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from './../../environments/environment';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //   this.route.fragment.subscribe((fragment: string) => {
    //     console.log("My hash fragment is here => ", fragment)
    // })
    const query = new URLSearchParams(location.hash.substring(1));
    const token = query.get('access_token');
    console.log(token);
    if (token) {
      this.authService.login(token);
      this.router.navigate(['/']);
    }
  }

  login(): void {
    window.location.href = `${environment.VITE_AUTH_ENDPOINT}?client_id=${environment.VITE_CLIENT_ID}&redirect_uri=${environment.VITE_REDIRECT_URI}&response_type=token`;
  }
}
