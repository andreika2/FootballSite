import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { NewsComponent } from "./news/news.component";
import { HistoryComponent } from "./history/history.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { UserComponent } from "./user/user.component";
import { ArticleComponent } from "./news/article/article.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { EditorModule } from "@tinymce/tinymce-angular";
import { SharedModule } from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    NewsComponent,
    HistoryComponent,
    ContactsComponent,
    UserComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    EditorModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UserViewModule { }
