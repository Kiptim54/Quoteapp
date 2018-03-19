
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

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
  
  addQuote(username, quota, author){
    console.log(username, quota, author )
    this.quotes.push(username, quota, author)
    return false;
    
}





  ngOnInit(){
    

}
delete(quote){
  console.log(quote);
  confirm("Delete quote?");
  {this.quotes.splice(quote);
    return false;
}


}
}
