import { Component, OnInit , Input} from '@angular/core';
import { Quote } from '../quote'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote: Quote;
  quotes=[];
  constructor(){
    this. quotes=[
     this.quote= new Quote ("Kiptim","We are our choices","Unknown"),
      
    ];
  }  
  shareQuote(quote:HTMLInputElement, source:HTMLInputElement, username:HTMLInputElement): boolean{
    console.log(` ${quote.value} ${source.value}  ${username.value}`);
      this.quotes.push(new Quote(quote.value, source.value, username.value));
      quote.value = '';
      source.value = '';
      username.value = '';
      return false;
    }
  Likes:number=0;
  Like(){
    this.Likes+=1;
  } 
  Dislikes:number=0;
  Dislike(){
    this.Dislikes+=1;

  }
  
 
  
    
  
  ngOnInit() {
  }

}
