import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet'

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweet: Tweet = {
    id: 1,
    author: 'votoms',
    tweet: 'Hello,World!'
  }

  constructor() { }

  ngOnInit() {
  }

}
