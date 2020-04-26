import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { TWEETS } from './mock-tweets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

// クラスを 依存関係注入システム に参加するものとしてマークします。
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private twitterUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=ryuchan_00&count=20'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + environment.apikey,
    })
  };

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.twitterUrl, this.httpOptions)
  }
}
