import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-more-details-microloans',
  templateUrl: './more-details-microloans.component.html',
  styleUrls: ['./more-details-microloans.component.scss'],
})
export class MoreDetailsMicroloansComponent implements OnInit {

  @Input() microloan;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dissmiss() {
    this.modalController.dismiss();
  }

}
