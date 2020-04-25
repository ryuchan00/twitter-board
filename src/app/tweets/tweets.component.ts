import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TWEETS } from '../mock-tweets';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(): void {
    this.tweetService.getTweets().subscribe(tweets => this.tweets = tweets);
  }

}
