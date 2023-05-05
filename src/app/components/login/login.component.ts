import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup = this._fb.group({
    email:['', [Validators.required, Validators.email ]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });
  public submitted:boolean = false;

  get loginForm() {
    return this.form.controls;
  }

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    @Inject(LoginService) private loginService: LoginService){}

  public onSubmit(): void{
    this.submitted = true;
    if(this.form.valid){
      this.loginService.authenticate().subscribe();
    }
  }

  public forgetPassword(): void {
    console.log('password reset');
  }
  public routeToRegisterPage(): void{
    this._router.navigate(['register'])
  }
}
