import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-news-delete-modal',
  templateUrl: './add-news-delete-modal.component.html',
  styleUrls: ['./add-news-delete-modal.component.scss']
})
export class AddNewsDeleteModalComponent {

  constructor(public dialogRef: MatDialogRef<AddNewsDeleteModalComponent>) { }

  public closeModalWindow(result: boolean): void {
    this.dialogRef.close(result);
  }

}
