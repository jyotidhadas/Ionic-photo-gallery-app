import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/images.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fullscreen-view',
  templateUrl: './fullscreen-view.page.html',
  styleUrls: ['./fullscreen-view.page.scss'],
})
export class FullscreenViewPage implements OnInit {
  @Input() imagePath: string | undefined;
  
  constructor(private apiService:ImagesService,
    private modalController : ModalController) { }

  ngOnInit() {

  }
  dismiss() {
    this.modalController.dismiss();
  }
}
