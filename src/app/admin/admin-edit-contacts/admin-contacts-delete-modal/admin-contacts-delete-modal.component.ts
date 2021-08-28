import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-contacts-delete-modal',
  templateUrl: './admin-contacts-delete-modal.component.html',
  styleUrls: ['./admin-contacts-delete-modal.component.scss']
})
export class AdminContactsDeleteModalComponent {

  constructor(public dialogRef: MatDialogRef<AdminContactsDeleteModalComponent>) { }

  public closeModalWindow(result: boolean): void {
    this.dialogRef.close(result);
  }

}
