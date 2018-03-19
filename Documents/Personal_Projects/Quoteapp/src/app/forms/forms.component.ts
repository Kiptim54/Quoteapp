import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
quotes:[
 new Quote('Brenda Kiptim','You are your choices','Unkown')
];
  
  addQuote(userName,quotes,author){
    this.quotes.unshift(userName,quotes,author);
    return false;
}



  ngOnInit(){
    this.Quote=[];

}

}
