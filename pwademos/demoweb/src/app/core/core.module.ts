import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ForgotPasswordScreenComponent } from './forgot-password-screen/forgot-password-screen.component';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent, SideNavContentComponent, SplashScreenComponent, MainScreenComponent, LoginScreenComponent, ForgotPasswordScreenComponent],
  exports: [HeaderComponent, SideNavComponent, SideNavContentComponent, SplashScreenComponent, MainScreenComponent, LoginScreenComponent, ForgotPasswordScreenComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
