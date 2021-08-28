import {Component, OnInit} from '@angular/core';
import {ModulesInit, PageTitles} from "../../shared/components/shared-header/shared-header.entity";
import {Router} from "@angular/router";
import {CONTACTS_ROUT, HEADERS_MAP, NEWS_ROUT, RoutsAdmin} from "./admin.entity";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, ModulesInit {

  public headerTitle = PageTitles.News;
  public headerOptionsList: PageTitles[] = Object.values(PageTitles).filter(header => header !== PageTitles.History);

  constructor(readonly router: Router) {}

  public ngOnInit(): void {
    this.initHeaderTitle();
  }

  public toolBarButtonClicked(newHeaderTitle: PageTitles): void {
    this.redirectToPage(newHeaderTitle);
  }

  public redirectToPage(newHeaderTitle: PageTitles): void {
    switch (newHeaderTitle) {
      case PageTitles.News :
        this.router.navigate([NEWS_ROUT]);
        break;
      case PageTitles.Contacts:
        this.router.navigate([CONTACTS_ROUT]);
        break;
    }
  }

  public initHeaderTitle(): void {
    this.headerTitle = HEADERS_MAP.get(this.router.url as RoutsAdmin) || this.headerTitle;
  }
}
