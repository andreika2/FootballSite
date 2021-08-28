import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {UploaderCaptions} from "ngx-awesome-uploader/lib/uploader-captions";
import {TINY_MCE_KEY} from "../../../../environments/environment.prod";
import {
  DEFAULT_CONTROL_VALUE,
  DEFAULT_FORM_DATA, DEFAULT_UPLOAD_IMAGE_KEY,
  IFormData, REDIRECT_TO_LIST_NEWS_URL, SNACK_BOX_MESSAGE,
  TINY_MCE_CONFIG,
  TINY_MCE_DEFAULT_VALUE,
  UPLOADER_CAPTIONS
} from "./add-news.entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AddNewsService} from "./add-news.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AVAILABLE_FILE_TYPES, PhotoFormat, SNACK_BOX_POSITION_CONFIG} from "../../admin.entity";
import {FilePreviewModel} from "ngx-awesome-uploader";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
  providers: [AddNewsService]
})
export class AddNewsComponent implements OnInit, OnDestroy {

  public initialValue = TINY_MCE_DEFAULT_VALUE;
  public tinyMCEKey = TINY_MCE_KEY;
  public tinyMCEConfig = TINY_MCE_CONFIG;
  public captions: UploaderCaptions = UPLOADER_CAPTIONS;
  public availableFileType = AVAILABLE_FILE_TYPES;
  public addNewsForm: FormGroup = new FormGroup({})

  private addNewFormData: IFormData = DEFAULT_FORM_DATA;
  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(@Self() readonly addNewsService: AddNewsService,
              readonly router: Router,
              readonly snackBar: MatSnackBar,
              readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initAddNewFormGroup();
  }

  public fileAdded(fileImage: FilePreviewModel): void {
    fileImage.file.arrayBuffer().then(buffer => {
      const fileB64 = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      const format = fileImage.file.type === "image/png" ? PhotoFormat.PNG : PhotoFormat.JPG;
      this.addNewsForm.get(DEFAULT_UPLOAD_IMAGE_KEY)?.setValue({ format, fileB64 });
    })
  }

  public fileRemoved = (): void => this.addNewsForm.get(DEFAULT_UPLOAD_IMAGE_KEY)?.setValue("")
  public isAddNewFormValid = () => !this.addNewsForm.valid;

  public addNews(): void {
    this.addNewsService
      .sendNews(this.addNewFormData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.router.navigate([REDIRECT_TO_LIST_NEWS_URL]);
        this.initSnackBar();
      })
  }

  public goToListNews(): void {
    this.router.navigate([REDIRECT_TO_LIST_NEWS_URL]);
  }

  private initAddNewFormGroup(): void {
    this.addNewsForm = this.formBuilder.group({
      title: [DEFAULT_CONTROL_VALUE, Validators.required],
      textPreview: [DEFAULT_CONTROL_VALUE, Validators.required],
      image: [DEFAULT_CONTROL_VALUE, Validators.required],
      content: [DEFAULT_CONTROL_VALUE, Validators.required]
    });

    this.initFormSubscribe();
  }

  private initFormSubscribe(): void {
    this.addNewsForm
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((formData: IFormData) => this.addNewFormData = formData)
  }

  private initSnackBar(): void {
    this.snackBar.open(SNACK_BOX_MESSAGE, undefined, SNACK_BOX_POSITION_CONFIG)
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

}
