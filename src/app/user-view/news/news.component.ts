import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from "./news.service";
import {DEFAULT_PAGINATION, IPagination} from "../../admin/admin-edit-news/admin-news-list/admin-news-list.entity";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {INewsPreviewModel} from "./news.entity";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit, OnDestroy {

  public newPreviewList: INewsPreviewModel[] = [];
  public paginationModel: IPagination = DEFAULT_PAGINATION;
  public openArticleId = 1;
  public totalItemsCount = 0;
  public isArticleOpen = false;

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(readonly newsService: NewsService) {}

  public ngOnInit(): void {
    this.getNewsList();
  }

  public openArticle(isArticleOpen: boolean, articleId: number): void {
    this.openArticleId = articleId;
    this.isArticleOpen = isArticleOpen;
  }

  public showMore(): void {
    this.paginationModel.offset = this.paginationModel.offset + 10;
    this.getNewsList();
  }

  public isShowMoreButtonShow = (): boolean => this.totalItemsCount !== this.newPreviewList.length;

  private getNewsList(): void {
    this.newsService
      .getNewsList(this.paginationModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ models, count }) => {
        this.totalItemsCount = count;
        this.newPreviewList.push(...models);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
