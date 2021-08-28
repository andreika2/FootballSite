import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_API_URL} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {IArticleModel} from "./article.entity";

@Injectable()
export class ArticleService {

  constructor(readonly httpClient: HttpClient) { }

  public getArticleById(articleId: number): Observable<IArticleModel> {
    return this.httpClient.get(`${BASE_API_URL}/news/${articleId}`) as Observable<IArticleModel>;
  }
}
