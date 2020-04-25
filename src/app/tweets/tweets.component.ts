import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TWEETS } from '../mock-tweets';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets = TWEETS;

  constructor() { }

  ngOnInit() {
  }

}
