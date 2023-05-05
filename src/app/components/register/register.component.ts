import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form: FormGroup = this._fb.group({
    fname: ['', Validators.required],
    lname: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor( private _router: Router, private _fb: FormBuilder){}

  public routeToLoginPage(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../../../app.worker.ts', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage(['m','n','c','a','s','d','r','e','w','q','y','t','u','i','o','p']);
    } else {
      console.log('no worker run');
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
    // this._router.navigate(['login']);
  }

  public onSubmit(): void {
    console.log('hello')
    if(this.form.valid){
      console.log(this.form.value);
    }
  }
}
