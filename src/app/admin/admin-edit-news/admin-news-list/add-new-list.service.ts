import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_API_URL } from "../../../../environments/environment";
import {INewsListModel, IPagination} from "./admin-news-list.entity";
import {IPaginationModel} from "../../../app.entity";
import {LOCAL_STORAGE_KEY} from "../../admin.entity";
import {IAccessToken} from "../../login-page/login.entity";
import {BaseApiDirective} from "../../base-api.directive";

@Injectable()
export class AddNewListService extends BaseApiDirective {

  constructor(readonly httpClient: HttpClient) {
    super();
  }

  public getNewsList(pagination: IPagination): Observable<IPaginationModel<INewsListModel>> {
    return this.httpClient.post(`${BASE_API_URL}/news/items`, pagination, { headers: this.getHeaders() } ) as Observable<IPaginationModel<INewsListModel>>;
  }

  public deleteNews(newsId: number): Observable<object> {
    return this.httpClient.delete(`${BASE_API_URL}/news/${newsId}`, { headers: this.getHeaders() });
  }
}
