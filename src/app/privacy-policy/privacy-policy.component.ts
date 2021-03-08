import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {

  policy: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getPrivacyPolicy();
  }

  getPrivacyPolicy() {
    this.httpService.get('kotlinfive/politika-confidens.json').then(policy => this.policy = policy[0]);
  }

}
