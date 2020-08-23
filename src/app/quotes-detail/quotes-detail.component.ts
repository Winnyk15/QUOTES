import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() seen = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfHates : number = 0;

  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfHates++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
