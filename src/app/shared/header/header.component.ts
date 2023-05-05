import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _router: Router){}

  public routeToRegister(): void {
    this._router.navigateByUrl('/register');
  }
}
