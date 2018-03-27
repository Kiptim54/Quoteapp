import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { TimeCountPipe } from './time-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuotesComponent,
    StrikethroughDirective,
    TimeCountPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
