import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {Platform} from '@ionic/angular';
import {environment} from '../environments/environment';
import {v4 as uuidv4} from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private apiHost;

    constructor(
        private http: HttpClient,
        private httpIonic: HTTP,
        private platform: Platform
    ) {
        this.apiHost = environment.apiUrl;
    }

    public get(url: string) {
        if (this.platform.is('cordova')) {
            return this.httpIonic.get(this.apiHost + url, {}, {})
                .then(res => {
                    let data = res.data;
                    if (url.includes('news')) {
                        data = res.data.map(n => ({...n, guid: uuidv4()}));
                    } else if (url.includes('zaim')) {
                        data = res.data.map(microloan => {
                            microloan.rating_images = [];
                            for (let i = 0; i < 5; i++) {
                                if (i < microloan.rating) {
                                    microloan.rating_images.push('assets/img/svg/vector.svg');
                                } else {
                                    microloan.rating_images.push('assets/img/svg/vector-2.svg');
                                }
                            }
                            return microloan;
                        });
                    }
                    return JSON.parse(data);
                });
        } else {
            return this.http.get(this.apiHost + url).toPromise();
        }
    }

    public post(url, body) {
        if (this.platform.is('cordova')) {
            return this.httpIonic.post(this.apiHost + url, body, {})
                .then(res => JSON.parse(res.data));
        } else {
            return this.http.post(this.apiHost + url, body).toPromise();
        }
    }

    public put(url, body?: any) {
        if (this.platform.is('cordova')) {
            return this.httpIonic.put(this.apiHost + url, body, {})
                .then(res => JSON.parse(res.data));
        } else {
            return this.http.put(this.apiHost + url, body).toPromise();
        }
    }

    public delete(url) {
        if (this.platform.is('cordova')) {
            return this.httpIonic.delete(this.apiHost + url, {}, {})
                .then(res => JSON.parse(res.data));
        } else {
            return this.http.delete(this.apiHost + url).toPromise();
        }
    }
}
