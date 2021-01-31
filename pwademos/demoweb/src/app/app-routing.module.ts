import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './core/login-screen/login-screen.component';
import { MainScreenComponent } from './core/main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'main',
    component: MainScreenComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
