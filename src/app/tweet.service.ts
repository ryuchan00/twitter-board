import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { TWEETS } from './mock-tweets';
import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

// クラスを 依存関係注入システム に参加するものとしてマークします。
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() {
      console.log(environment.apikey);
    }

  getTweets(): Observable<Tweet[]> {
    return of(TWEETS);
  }
}
