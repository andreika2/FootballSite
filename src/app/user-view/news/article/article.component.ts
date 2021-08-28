import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {IArticleModel} from "./article.entity";
import {TINY_MCE_KEY} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit, OnDestroy {

  @Input() public openArticle: (openArticle: boolean, articleId: number) => void = () => {};
  @Input() public articleId: number = 1;
  public articleData: IArticleModel = {} as IArticleModel;
  public tinyMCEKey = TINY_MCE_KEY;
  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(readonly articleService: ArticleService) {}

  public ngOnInit(): void {
    this.articleService
      .getArticleById(this.articleId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(articleData => this.articleData = articleData)
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
