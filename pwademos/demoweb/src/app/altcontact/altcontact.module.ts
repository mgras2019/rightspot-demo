import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltContactScreenComponent } from './alt-contact-screen/alt-contact-screen.component';
import { AltContactListComponent } from './alt-contact-list/alt-contact-list.component';
import { AltContactListItemComponent } from './alt-contact-list-item/alt-contact-list-item.component';



@NgModule({
  declarations: [AltContactScreenComponent, AltContactListComponent, AltContactListItemComponent],
  imports: [
    CommonModule
  ]
})
export class AltcontactModule { }
