import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPagination} from "../../admin/admin-edit-news/admin-news-list/admin-news-list.entity";
import {Observable} from "rxjs";
import {IPaginationModel} from "../../app.entity";
import {BASE_API_URL} from "../../../environments/environment";
import {INewsPreviewModel} from "./news.entity";

@Injectable()
export class NewsService {

  constructor(readonly httpClient: HttpClient) { }

  public getNewsList(pagination: IPagination): Observable<IPaginationModel<INewsPreviewModel>> {
    return this.httpClient.post(`${BASE_API_URL}/news`, pagination) as Observable<IPaginationModel<INewsPreviewModel>>;
  }
}
