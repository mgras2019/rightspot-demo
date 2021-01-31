import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { VerifyOtpScreenComponent } from './verify-otp-screen/verify-otp-screen.component';



@NgModule({
  declarations: [RegisterScreenComponent, VerifyOtpScreenComponent],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
