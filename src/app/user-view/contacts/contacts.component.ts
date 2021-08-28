import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from "./contacts.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ContactsColumn} from "./contacts.emtity";
import {IContactItem} from "../../admin/admin-edit-contacts/admin-edit-contacts.entity";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit, OnDestroy {

  public displayedColumns: ContactsColumn[] = Object.values(ContactsColumn);
  public dataSource: IContactItem[] = [];

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(readonly contactsService: ContactsService) {}


  public ngOnInit(): void {
    this.contactsService.getContactsList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ contactPersons }) => this.dataSource = contactPersons);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
