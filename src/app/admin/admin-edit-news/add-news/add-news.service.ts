import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IFormData} from "./add-news.entity";
import {Observable} from "rxjs";
import {BASE_API_URL} from "../../../../environments/environment";
import {BaseApiDirective} from "../../base-api.directive";

@Injectable()
export class AddNewsService extends BaseApiDirective {

  constructor(readonly httpClient: HttpClient) {
    super();
  }

  public sendNews(formData: IFormData): Observable<object> {
    return this.httpClient.post(`${BASE_API_URL}/news/create`, formData, { headers: this.getHeaders() });
  }
}
