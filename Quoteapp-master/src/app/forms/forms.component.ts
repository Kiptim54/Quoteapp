import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  @Input() quote: Quote;
  @Output() isComplete= new EventEmitter<boolean>();
quotes:Quote[];
 constructor(){
  this. quotes=[
  new Quote ("Kiptim","We are our choices","Unknown", " 5 hours ago"),

   ];
 }
 shareQuote(quote:HTMLInputElement, source:HTMLInputElement, username:HTMLInputElement, completetime:any){
  this.quotes.push(new Quote(quote.value, source.value, username.value, completetime.value));
  quote.value = '';
  source.value = '';
  username.value = '';
  
}
  
  Quotedelete(isComplete, index){
    if(isComplete){
      this.quotes.splice(index, 1)
    }
  }
 

  }
