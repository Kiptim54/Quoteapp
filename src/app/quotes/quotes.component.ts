import { Component, OnInit , Input} from '@angular/core';
import { Quote } from '../quote'
import { Time } from '@angular/common';

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
  
  delete(quotes){
    for( let i=0; i<this.quotes.length; i++){
      if(this.quotes[i]=quotes){
        this.quotes.splice(i,1)
      }
      }
    }
  
    
  
  ngOnInit() {
  }

}
