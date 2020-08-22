import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, 'Do not be afraid of starting over again. This time, you are not starting from scratch, you are starting from experience, 'Jagrid', 'Hawkins Muriithi', new Date(2020.8.20))
    new Quote(2, 'If you dont understand the details of your own business you are going to fail.', 'Jeff Bezos', 'Anonymous', new Date(2020.6.12))
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
