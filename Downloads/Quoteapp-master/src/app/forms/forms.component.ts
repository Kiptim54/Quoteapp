
import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
  @Input()quote:Quote;
 
  quotes=[];
  constructor(){
    this.quotes=[
      new Quote ("Kiptim","We are our choices","Unknown"),
      
    ];
    
  }





}

