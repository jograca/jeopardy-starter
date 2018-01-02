import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {JeopardyService } from './jeopardy.service';
import {NewsService} from './news.service';
import { AnswerComponentComponent } from './answer-component/answer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
