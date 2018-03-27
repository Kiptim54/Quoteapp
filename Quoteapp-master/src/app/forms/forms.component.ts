
import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
quotes:Quote[];
 constructor(){
   this.quotes=[
     new Quote("We are our Choices", "~Unknown", "Brenda Kiptim",new Date(2018,3,15)),
   ];
 }
 shareQuote(quote:HTMLInputElement, source:HTMLInputElement, username:HTMLInputElement, completedate:any): boolean{
console.log(`Adding quote: ${quote.value} by:${source.value} submitted by: ${username.value} on ${completedate}`);
  this.quotes.push(new Quote(quote.value, source.value, username.value, completedate));
  quote.value = '';
  source.value = '';
  username.value = '';
  return false;
}

delete(quote){
  for( let i=0; i<this.quotes.length; i++){
    if(this.quotes[i]=quotes){
      this.quotes.splice(i,1)
    }
    }
  }
    
  }
  







