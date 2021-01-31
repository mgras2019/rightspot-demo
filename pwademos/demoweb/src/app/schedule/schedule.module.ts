import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleScreenComponent } from './schedule-screen/schedule-screen.component';
import { LiveBusTrackComponent } from './live-bus-track/live-bus-track.component';
import { BusScheduleComponent } from './bus-schedule/bus-schedule.component';



@NgModule({
  declarations: [ScheduleScreenComponent, LiveBusTrackComponent, BusScheduleComponent],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
