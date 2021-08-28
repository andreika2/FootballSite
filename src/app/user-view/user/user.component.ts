import {Component, OnInit} from '@angular/core';
import {ModulesInit, PageTitles} from "../../shared/components/shared-header/shared-header.entity";
import {Router} from "@angular/router";
import {HEADER_USER_MAP, USER_CONTACTS_ROUT, USER_HISTORY_ROUT, USER_NEW_ROUT, UserViewRout} from "./user.entity";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, ModulesInit {

  public headerTitle = PageTitles.News;
  public headerOptionsList: PageTitles[] = Object.values(PageTitles);

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
        this.router.navigate([USER_NEW_ROUT]);
        break;
      case PageTitles.Contacts:
        this.router.navigate([USER_CONTACTS_ROUT]);
        break;
      case PageTitles.History:
        this.router.navigate([USER_HISTORY_ROUT]);
        break;
    }
  }

  public initHeaderTitle(): void {
    this.headerTitle = HEADER_USER_MAP.get(this.router.url as UserViewRout) || this.headerTitle;
  }

}
