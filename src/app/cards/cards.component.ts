import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  cards: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getCard();
  }

  getCard() {
    this.httpService.get('kotlinfive/kard.json').then(cards => this.cards = cards);
  }

}
