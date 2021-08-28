import {Directive} from '@angular/core';
import { HttpHeaders} from "@angular/common/http";
import {LOCAL_STORAGE_KEY} from "./admin.entity";
import {IAccessToken} from "./login-page/login.entity";

@Directive({
  selector: '[appBaseApi]'
})
export class BaseApiDirective {

  constructor() { }

  protected getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (accessToken !== null) {
      const token: IAccessToken = JSON.parse(accessToken)
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ token.accessToken }`
      });
    }

    return new HttpHeaders();
  }

}
