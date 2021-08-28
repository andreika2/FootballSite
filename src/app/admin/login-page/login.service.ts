import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAccessToken, ILoginFormData} from "./login.entity";
import {BASE_API_URL} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(readonly httpClient: HttpClient) { }

  public loginUser(loginFormData: ILoginFormData): Observable<IAccessToken> {
    return this.httpClient.post(`${BASE_API_URL}/token`, loginFormData) as  Observable<IAccessToken>;
  }
}
