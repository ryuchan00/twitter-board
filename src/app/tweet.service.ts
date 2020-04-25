import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { TWEETS } from './mock-tweets';
import { Observable, of } from 'rxjs';

// クラスを 依存関係注入システム に参加するものとしてマークします。
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  getTweets(): Observable<Tweet[]> {
    return of(TWEETS);
  }
}
