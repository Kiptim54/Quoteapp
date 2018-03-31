import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() todelete= new EventEmitter();
  quotes=[]
  constructor() { 
    this. quotes=[
      this.quote= new Quote ("Kiptim","We are our choices","Unknown", new Date(2018,3,15)),
       
     ];
  }


  Likes:number=0;
  Like(){
    this.Likes+=1;
  } 
  Dislikes:number=0;
  Dislike(){
    this.Dislikes+=1;

  }
  delete(quote){
    for( let i=0; i<this.quotes.length; i++){
      if(this.quote=this.quote){
        this.quotes.splice(i,1)
      }
      }
    }
 
  ngOnInit() {
  }

}
