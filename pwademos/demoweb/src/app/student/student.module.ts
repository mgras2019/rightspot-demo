import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsScreenComponent } from './students-screen/students-screen.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';



@NgModule({
  declarations: [StudentsScreenComponent, StudentListComponent, StudentListItemComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
