import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AdminEditNewsComponent } from './admin-edit-news/admin-edit-news.component';
import { AdminEditContactsComponent } from './admin-edit-contacts/admin-edit-contacts.component';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { AdminNewsListComponent } from './admin-edit-news/admin-news-list/admin-news-list.component';
import { AddNewsComponent } from './admin-edit-news/add-news/add-news.component';
import { FilePickerModule } from "ngx-awesome-uploader";
import { HttpClientModule } from "@angular/common/http";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MatPaginatorIntl, MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { AddNewsDeleteModalComponent } from './admin-edit-news/admin-news-list/add-news-delete-modal/add-news-delete-modal.component';
import { getRusPaginatorIntl } from "./rus-pagination-intl";
import { AdminContactsDeleteModalComponent } from './admin-edit-contacts/admin-contacts-delete-modal/admin-contacts-delete-modal.component';
import { BaseApiDirective } from './base-api.directive';


@NgModule({
  declarations: [
    AdminComponent,
    LoginPageComponent,
    AdminEditNewsComponent,
    AdminEditContactsComponent,
    AdminNewsListComponent,
    AddNewsComponent,
    AddNewsDeleteModalComponent,
    AdminContactsDeleteModalComponent,
    BaseApiDirective
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatIconModule,
        FilePickerModule,
        HttpClientModule,
        MatStepperModule,
        MatSnackBarModule,
        EditorModule,
        ReactiveFormsModule,
        SharedModule,
        MatPaginatorModule,
        MatDialogModule
    ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getRusPaginatorIntl() }
  ]
})
export class AdminModule { }
