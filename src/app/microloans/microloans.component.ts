import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MoreDetailsMicroloansComponent} from './more-details-microloans/more-details-microloans.component';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-microloans',
  templateUrl: './microloans.component.html',
  styleUrls: ['./microloans.component.scss'],
})
export class MicroloansComponent implements OnInit {

  microloans: any[] = [];

  constructor(private modalController: ModalController, private httpService: HttpService) { }

  ngOnInit() {
    this.getZaim();
  }

  getZaim() {
    this.httpService.get('kotlinfive/zaim.json')
        .then(microloans => this.microloans = microloans);
  }

  async moreDetails(microloan) {
    const modal = await this.modalController.create({
      component: MoreDetailsMicroloansComponent,
      cssClass: 'my-custom-class',
      componentProps: {microloan}
    });

    modal.present();
  }

}
