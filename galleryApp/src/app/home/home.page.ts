import { Component } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  gotoSplashscreen(){
    this.navCtrl.navigateForward('splashscreen')
  }
}
