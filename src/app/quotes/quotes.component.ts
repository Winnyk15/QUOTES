import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, 'All our dreams can come true if we have the courage to pursue them.', 'Walt Disney', 'Winnie Kahendah', new Date(2020,2,2)),
    new Quote(2, 'The secret of getting ahead is getting started.', 'Mark Twain', 'Anonymous', new Date(2020,1,2))
  ];


  details(index){
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addAQuote(quote){
    let allQuotesLength = this.quotes.length;
    quote.id = allQuotesLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  hideQuote(seen, index){
    if(seen) {
      let toHide = confirm(`Are you sure you want to delete quote?`)
      
      if (toHide){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
