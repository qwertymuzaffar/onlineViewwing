import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  news: any;

  constructor() { }

  ngOnInit() {
    this.news = JSON.parse(localStorage.getItem('news'));
  }

}
