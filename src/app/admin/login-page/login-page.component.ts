import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DEFAULT_LOGIN_FORM_DATA, LOGIN_REDIRECT_URL} from "./login.entity";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {LoginService} from "./login.service";
import {LOCAL_STORAGE_KEY} from "../admin.entity";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public loginFormGroup: FormGroup = new FormGroup({});
  public isErrorMessageShow = false;

  private loginFormData = DEFAULT_LOGIN_FORM_DATA;
  readonly destroy$: Subject<void> = new Subject<void>();

  constructor(readonly router: Router,
              readonly formBuilder: FormBuilder,
              @Self() readonly loginService: LoginService) { }

  public ngOnInit(): void {
    this.initLoginFormGroup();
  }

  public onLogin(): void {
    this.loginService.loginUser(this.loginFormData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (accessToken) => {
          accessToken.lifetime = new Date().getTime() + accessToken.lifetime * 60000;
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(accessToken));
          this.router.navigate([LOGIN_REDIRECT_URL]);
      },
        () => this.isErrorMessageShow = true
      );
  }

  private initLoginFormGroup(): void {
    this.loginFormGroup = this.formBuilder.group({
      username : ["" ,Validators.required],
      password: ["", Validators.required]
    })
    this.initSubscribeForm();
  }

  private initSubscribeForm(): void {
    this.loginFormGroup
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(formData => this.loginFormData = formData);
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next();
  }

}
