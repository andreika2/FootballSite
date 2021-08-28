import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {AdminEditContactsService} from "./admin-edit-contacts.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {
  ADD_CONTACT_ELEMENT,
  ContactsColumn,
  IContactItem,
  PhotoFormat,
  SNACK_BAR_SUCCESS_CREATE_MESSAGE,
  SNACK_BAR_SUCCESS_DELETE_MESSAGE,
  SNACK_BAR_SUCCESS_UPDATE_MESSAGE
} from "./admin-edit-contacts.entity";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AVAILABLE_FILE_TYPES, SNACK_BOX_POSITION_CONFIG} from "../admin.entity";
import {MatDialog} from "@angular/material/dialog";
import {AdminContactsDeleteModalComponent} from "./admin-contacts-delete-modal/admin-contacts-delete-modal.component";
import {FilePreviewModel} from "ngx-awesome-uploader";

@Component({
  selector: 'app-admin-edit-contacts',
  templateUrl: './admin-edit-contacts.component.html',
  styleUrls: ['./admin-edit-contacts.component.scss'],
  providers: [AdminEditContactsService]
})
export class AdminEditContactsComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) private table: MatTable<any> | undefined;
  public displayedColumns: ContactsColumn[] = Object.values(ContactsColumn);
  public dataSource: IContactItem[] = [];
  public tableFormMapGroup: Map<number, FormGroup> = new Map<number, FormGroup>();
  public availableFileType = AVAILABLE_FILE_TYPES;
  public isAddButtonDisabled = false;
  public isAddContact = false;
  public isViewMode: boolean[] = [];
  public isDisabled: boolean[] = []

  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(readonly adminEditContactsService: AdminEditContactsService,
              readonly snackBar: MatSnackBar,
              readonly matDialog: MatDialog,
              readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.getContactsList();
  }

  public addContact(): void {
    this.isAddContact = true;
    this.dataSource.unshift(ADD_CONTACT_ELEMENT);
    this.initTableFormGroup(this.dataSource);
    this.initRowEditMode(0);
    this.table?.renderRows();
  }

  public removeContact(elementId: number): void {
    const dialogRef = this.openModalWindow();
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result) {
          this.adminEditContactsService.deleteContact(elementId)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
              this.getContactsList();
              this.table?.renderRows();
              this.snackBar.open(SNACK_BAR_SUCCESS_DELETE_MESSAGE, undefined, SNACK_BOX_POSITION_CONFIG)
            })
        }
      });
  }

  public getFormGroupById(elementId: number): FormGroup {
    return this.tableFormMapGroup.get(elementId) as FormGroup;
  }

  public getFormControlByName(elementId: number, path: string): FormControl {
    return this.getFormGroupById(elementId).get(path) as FormControl;
  }

  public initRowEditMode(elementId: number) {
    this.isViewMode[elementId] = false;
    this.isAddButtonDisabled = true;
    this.isDisabled = this.isDisabled.map((value, index) => index !== elementId);
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.FormalLink)?.enable();
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.FullName)?.enable();
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.Photo)?.enable();
  }

  public getDisabledById = (elementId: number): boolean =>  this.isDisabled[elementId];

  public updateContact(): void {
    const elementId = this.isViewMode.findIndex(val => val === false);
    let editRowValue = this.getFormGroupById(elementId).value;
    editRowValue = {
      ...editRowValue,
      id: elementId,
      [ContactsColumn.Photo]: this.getFormControlByName(elementId, ContactsColumn.Photo).value
    }

    if (this.isAddContact) {
      delete editRowValue.photo.fileName;
      if (!editRowValue.photo.fileB64) delete editRowValue.photo;
      this.adminEditContactsService.createContact(editRowValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setViewMode(elementId);
          this.isAddButtonDisabled = false;
          this.isAddContact = false;
          this.getContactsList();
          this.snackBar.open(SNACK_BAR_SUCCESS_CREATE_MESSAGE, undefined, SNACK_BOX_POSITION_CONFIG);
        });
    } else {
      this.adminEditContactsService.updateContact(elementId, editRowValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setViewMode(elementId);
          this.isAddButtonDisabled = false;
          this.snackBar.open(SNACK_BAR_SUCCESS_UPDATE_MESSAGE, undefined, SNACK_BOX_POSITION_CONFIG);
        });
    }
  }

  public fileAdded(fileImage: FilePreviewModel, elementId: number): void {
    fileImage.file.arrayBuffer().then(buffer => {
      const fileB64 = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      const format = fileImage.file.type === "image/png" ? PhotoFormat.PNG : PhotoFormat.JPG;
      this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.Photo)?.setValue({ format, fileB64 });
    })
  }

  public fileRemoved = (elementId: number): void => this.tableFormMapGroup.get(elementId)?.get(ContactsColumn.Photo)?.setValue("");

  public cancelUpdate(): void {
    const elementId = this.isViewMode.findIndex(val => val === false);
    this.isAddButtonDisabled = false;
    this.setViewMode(elementId);
    this.getContactsList();
    if (this.isAddContact) {
      this.isAddContact = false;
      this.table?.renderRows();
    }
  }

  readonly openModalWindow = () => this.matDialog.open(AdminContactsDeleteModalComponent);

  private getContactsList(): void {
    this.adminEditContactsService.getContactsList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ contactPersons }) => {
        this.dataSource = contactPersons;
        this.initTableFormGroup(contactPersons);
      });
  }

  private setViewMode(elementId: number): void {
    this.isViewMode = this.isViewMode.map(() => true);
    this.isDisabled = this.isDisabled.map(() => false);
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.FormalLink)?.disable();
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.FullName)?.disable();
    this.tableFormMapGroup?.get(elementId)?.get(ContactsColumn.Photo)?.disable();
  }

  private initTableFormGroup(contactPersons: IContactItem[]): void {
    contactPersons.forEach(({formalLink, fullName, photo, id}) => {
      this.isViewMode[id] = true;
      this.isDisabled[id] = false;
      this.tableFormMapGroup.set(
        id,
        this.formBuilder.group({
          formalLink: [{ value: formalLink, disabled: true }],
          fullName: [{ value: fullName, disabled: true } ],
          photo: [{ value: photo, disabled: true } ],
        })
      )
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
