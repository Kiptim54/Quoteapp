
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
 
  
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





  ngOnInit(){
    

}
delete(quotes){
  for( let i=0; i<this.quotes.length; i++){
    if(this.quotes[i]=quotes){
      this.quotes.splice(i,1)
    }
    }
  }
 


}

