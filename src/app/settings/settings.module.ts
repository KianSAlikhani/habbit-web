import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SharedModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
