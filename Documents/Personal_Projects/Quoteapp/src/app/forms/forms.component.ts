import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
Quote:string[];
  
  addQuote(userName,quotes,author){
    this.Quote.unshift(userName,quotes,author);
    return false;
}



  ngOnInit(){
    this.Quote=[];

}

}
