import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuth()) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
