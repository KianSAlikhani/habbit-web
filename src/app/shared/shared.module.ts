import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfobarComponent } from './components/infobar/infobar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [InfobarComponent],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    InfobarComponent
  ]
})
export class SharedModule { }
