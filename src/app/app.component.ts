import { Component, OnInit} from '@angular/core';
import {JeopardyService } from './jeopardy.service';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questionInfo;
  topHeadline;

  constructor(private jeopardyService: JeopardyService, private newsService: NewsService) {

  }

  getDataFromService() {
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          if (this.questionInfo.value == null) {
            this.getDataFromService();
          }
          if (this.questionInfo.answer.includes('<i>')) {
            console.log('italics found, removing question');
            this.getDataFromService();
          }
          console.log(this.questionInfo.answer);
        }
      )
  }

  getNewsFromService() {
    this.newsService.getTopHeadline()
      .subscribe(
        topHeadline => {
          this.topHeadline = topHeadline;
          console.log('Top NYT World Article Abstract for Today: ')
          console.log(this.topHeadline.results[0].abstract);
        }
      )
  }

  ngOnInit() {
    this.getDataFromService()
    this.getNewsFromService()

  }

}
