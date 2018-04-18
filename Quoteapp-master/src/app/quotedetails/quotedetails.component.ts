import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  quotes=[];

 
  Likes:number=0;
  Like(){
    this.Likes+=1;
  } 
  Dislikes:number=0;
  Dislike(){
    this.Dislikes+=1;

  }
//  deleteQuote(complete:boolean){
//    this.isComplete.emit(complete);
//  }
//  Quotedelete(isComplete, index){
//   if(isComplete){
//     this.quotes.splice(index, 1)
//   }
// }
ngOnInit() {
  }

}
