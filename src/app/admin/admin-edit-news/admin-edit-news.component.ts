import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-edit-news',
  templateUrl: './admin-edit-news.component.html',
  styleUrls: ['./admin-edit-news.component.scss']
})
export class AdminEditNewsComponent {

  constructor(readonly router: Router) {}

  public setMode(openSnackBar = false): void {
    this.router.navigate(['admin/admin-page/add-news']);
  }
}
