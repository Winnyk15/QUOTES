import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.css']
})
export class FormQuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
