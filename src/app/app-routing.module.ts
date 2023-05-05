import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [{
      path:'',
      component: SearchBarComponent
    }]
  }
]

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes,
    {
      preloadingStrategy: QuicklinkStrategy
    }
  )],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule { }
