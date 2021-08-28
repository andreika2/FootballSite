import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule) },
  {
    path: "**",
    redirectTo: '',
    pathMatch: 'full',
    loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
