import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {JeopardyService } from './jeopardy.service';
import { AnswerComponentComponent } from './answer-component/answer-component.component';
import { CategoryComponentComponent } from './category-component/category-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponentComponent,
    CategoryComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
