import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AdminEditNewsComponent} from "./admin-edit-news/admin-edit-news.component";
import {AdminEditContactsComponent} from "./admin-edit-contacts/admin-edit-contacts.component";
import {AddNewsComponent} from "./admin-edit-news/add-news/add-news.component";
import {AdminGuard} from "./admin.guard";
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-page/edit-news',
    pathMatch: 'full'
  },
  {
    path: 'admin-page',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivate: [AdminGuard],
        redirectTo: 'admin-page/edit-news',
        pathMatch: 'full'
      },
      {
        path: 'edit-news',
        canActivate: [AdminGuard],
        component: AdminEditNewsComponent,
      },
      {
        path: 'add-news',
        canActivate: [AdminGuard],
        component: AddNewsComponent,
      },
      {
        path: 'edit-contacts',
        canActivate: [AdminGuard],
        component: AdminEditContactsComponent,
      },
      {
        path: "admin-page",
        redirectTo: 'admin-page/edit-news',
        canActivate: [AdminGuard],
        pathMatch: 'full'
      },
      {
        path: "**",
        redirectTo: 'admin-page/edit-news',
        canActivate: [AdminGuard],
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login' ,
    canActivate: [LoginGuard],
    component: LoginPageComponent
  },
  {
    path: "**",
    redirectTo: 'admin-page/edit-news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
