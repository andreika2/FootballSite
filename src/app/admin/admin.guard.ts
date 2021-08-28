import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LOCAL_STORAGE_KEY} from "./admin.entity";
import {GUARD_REDIRECT_ROUT} from "./admin.guard.entity";
import {IAccessToken} from "./login-page/login.entity";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(readonly router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
      const accessToken: IAccessToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
      if (new Date().getTime() >= accessToken.lifetime) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return this.redirectToDefaultPage();
      } else {
        return true;
      }
    } else {
      return this.redirectToDefaultPage();
    }
  }

  private redirectToDefaultPage(): boolean {
    this.router.navigate([GUARD_REDIRECT_ROUT]);
    return false;
  }

}
