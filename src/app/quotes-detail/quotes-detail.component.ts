import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() deleteQuote: EventEmitter<Quote> = new EventEmitter ();

  numberOfVotes : number = 0;

  upVoteClick(){
    this.numberOfVotes++;
  }
  downVoteClick(){
    this.numberOfVotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
