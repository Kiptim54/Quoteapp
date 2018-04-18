import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Output() isComplete= new EventEmitter<boolean>();
  @Input() quote: Quote;
  quotes=[];
  constructor(){
    this. quotes=[
     this.quote= new Quote ("","","","")
      
    ];
  }  

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  Quotedelete(isComplete, index){
   if(isComplete){
     this.quotes.splice(index, 1)
   }
  }
 
  
    
  
  ngOnInit() {
  }

}
