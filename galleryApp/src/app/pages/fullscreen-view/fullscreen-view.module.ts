import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullscreenViewPageRoutingModule } from './fullscreen-view-routing.module';

import { FullscreenViewPage } from './fullscreen-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullscreenViewPageRoutingModule
  ],
  declarations: [FullscreenViewPage]
})
export class FullscreenViewPageModule {}
