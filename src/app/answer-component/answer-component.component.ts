import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  overallScore = 0;
  userAnswer: string;
  winMessage: string;

  @Input() questionInfo;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer() {
    if (this.userAnswer === this.questionInfo.answer) {
      this.overallScore += this.questionInfo.value;
      this.winMessage = 'You Won $' + this.questionInfo.value + '!';
   }
    this.userAnswer = ' ';
  }
}
