import { Component, OnInit , Input} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  @Input() quote: Quote;
  quotes=[]
  constructor() { 
    this. quotes=[
      this.quote= new Quote ("Kiptim","We are our choices","Unknown"),
       
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
  delete(quotes){
    for( let i=0; i<this.quotes.length; i++){
      if(this.quotes=quotes){
        this.quotes.splice(i,1)
      }
      }
    }
 
  ngOnInit() {
  }

}
