import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './core/main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: "full"
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
