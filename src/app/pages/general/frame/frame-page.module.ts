import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

import { FramePageComponent } from './frame-page.component'

@NgModule({
  declarations: [
    FramePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FramePageComponent
  ]
})
export class FramePageModule {}
