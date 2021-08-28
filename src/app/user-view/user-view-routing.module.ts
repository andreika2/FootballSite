import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NewsComponent } from "./news/news.component";
import { HistoryComponent } from "./history/history.component";
import { ContactsComponent } from "./contacts/contacts.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/news',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
