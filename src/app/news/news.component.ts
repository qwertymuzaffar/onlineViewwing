import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: any[] = [];

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.httpService.get('kotlinfive/news.json')
        .then(news => this.news = news);
  }

  detail(n) {
    localStorage.setItem('news', JSON.stringify(n));
    this.router.navigate([`news/${n.guid}`]);
  }

}
