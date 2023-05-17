import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullscreenViewPage } from './fullscreen-view.page';

const routes: Routes = [
  {
    path: '',
    component: FullscreenViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullscreenViewPageRoutingModule {}
