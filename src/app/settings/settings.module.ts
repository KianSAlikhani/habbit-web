import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    MatExpansionModule,
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
