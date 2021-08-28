import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LOCAL_STORAGE_KEY} from "./admin.entity";
import {IAccessToken} from "./login-page/login.entity";
import {GUARD_REDIRECT_LOGIN_ROUT} from "./admin.guard.entity";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(readonly router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
      const accessToken: IAccessToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
      if ((new Date().getTime() >= accessToken.lifetime) && accessToken.accessToken) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return true;
      } else {
        this.router.navigate([GUARD_REDIRECT_LOGIN_ROUT]);
        return false;
      }
    }
    return true;
  }

}
