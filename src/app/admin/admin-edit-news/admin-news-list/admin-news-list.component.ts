import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {AddNewListService} from "./add-new-list.service";
import {
  DEFAULT_ITEM_COUNT,
  DEFAULT_PAGE_OFFSET,
  DEFAULT_PAGINATION,
  INewsListModel,
  IPagination,
  ListNewDisplayColumns, SNACK_BOX_DELETE_MESSAGE
} from "./admin-news-list.entity";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {PageEvent} from "@angular/material/paginator/paginator";
import {MatDialog} from "@angular/material/dialog";
import {AddNewsDeleteModalComponent} from "./add-news-delete-modal/add-news-delete-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SNACK_BOX_POSITION_CONFIG} from "../../admin.entity";

@Component({
  selector: 'app-admin-news-list',
  templateUrl: './admin-news-list.component.html',
  styleUrls: ['./admin-news-list.component.scss'],
  providers: [AddNewListService]
})
export class AdminNewsListComponent implements OnInit, OnDestroy {

  public pagination: IPagination = DEFAULT_PAGINATION;
  public displayedColumns: ListNewDisplayColumns[] = Object.values(ListNewDisplayColumns);
  public dataSource: INewsListModel[] = [];
  public isLoaded = true;
  public listNewsIsEmpty = false;
  public itemCount = DEFAULT_ITEM_COUNT;
  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(@Self() readonly addNewListService: AddNewListService,
              readonly snackBar: MatSnackBar,
              readonly matDialog: MatDialog) {}

  public ngOnInit(): void {
    this.getNewsList();
  }

  public onPaginationChanged({ previousPageIndex, pageIndex }: PageEvent): void {
    if (previousPageIndex === undefined) { return; }
    this.pagination.offset = this.updatePaginationOffset(previousPageIndex, pageIndex)
    this.getNewsList();
  }

  public deleteNews(newsId: number): void {
    const dialogRef = this.openModalWindow();
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.addNewListService.deleteNews(newsId)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.updateListAfterDelete());
        }
      })
  }

  readonly openModalWindow = () => this.matDialog.open(AddNewsDeleteModalComponent);

  private updatePaginationOffset(pageIndex: number, previousPageIndex: number): number {
    return pageIndex < previousPageIndex ?
      this.pagination.offset + DEFAULT_PAGE_OFFSET : this.pagination.offset - DEFAULT_PAGE_OFFSET;
  }

  private updateListAfterDelete(): void {
    this.getNewsList();
    this.snackBar.open(SNACK_BOX_DELETE_MESSAGE, undefined, SNACK_BOX_POSITION_CONFIG);
  }

  private getNewsList(): void {
    this.isLoaded = false;
    this.addNewListService.getNewsList(this.pagination)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ models, count }) => this.setNewsListData(models, count));
  }

  private setNewsListData(models: INewsListModel[], count: number): void {
    if (models.length === 0 && count !== 0) {
      this.pagination.offset = this.pagination.offset - DEFAULT_PAGE_OFFSET;
      this.listNewsIsEmpty = false;
      this.getNewsList();
    } else if(models.length === 0 && count === 0) {
      this.listNewsIsEmpty = true;
    } else if (models.length !== 0) {
      this.listNewsIsEmpty = false;
      this.dataSource = models;
      this.itemCount = count;
    }
    this.isLoaded = true;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
