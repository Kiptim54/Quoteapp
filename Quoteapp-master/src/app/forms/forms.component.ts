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
  this. quotes=[
  new Quote ("Kiptim","We are our choices","Unknown",),

   ];
 }
 shareQuote(quote:HTMLInputElement, source:HTMLInputElement, username:HTMLInputElement): boolean{
console.log(`Adding quote: ${quote.value} by:${source.value} submitted by: ${username.value}`);
  this.quotes.push(new Quote(quote.value, source.value, username.value));
  quote.value = '';
  source.value = '';
  username.value = '';
  return false;
}

delete(quotes){
  for( let i=0; i<this.quotes.length; i++){
    if(this.quotes=quotes){
      this.quotes.splice(i,1)
    }
    }
  }

  }
