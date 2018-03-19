import { Component, OnInit , Input} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }
  @Input()quote:Quote;
  quotes=[
    new Quote ("Kiptim","We are our choices","Unknown"),
    
  ];
  
  
    
  
  Likes:number=0;
  Like(){
    this.Likes+=1;
  }
  
  Dislikes:number=0;
  Dislike(){
    this.Dislikes-=1;
  }
    
    addQuote(username){
      console.log(username)
      this.quotes.push(username)
      return false;
  
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
