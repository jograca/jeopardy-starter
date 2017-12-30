import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  overallScore = 0;
  userAnswer: string;
  userMessage: string;

  @Input() questionInfo;
  @Output() newGame = new EventEmitter();

  questionCount = 0;

  constructor() {
  }

  ngOnInit() {
  }

  evaluateAnswer(): void {
    this.userAnswer = this.userAnswer.trim();
    if (this.userAnswer.toLowerCase() === this.questionInfo.answer.toLowerCase()) {
      this.overallScore += this.questionInfo.value;
      this.userMessage = this.questionInfo.answer + ' is correct! You Won $' + this.questionInfo.value;
    } else {
      this.userMessage = 'Incorrect! Answer was: ' + this.questionInfo.answer;
    }
    this.userAnswer = '';
  }

  newQuestion() {
    this.userMessage = '';
    this.questionCount = this.questionCount + 1;
    console.log('Question No: ' + this.questionCount);
    this.newGame.emit();
  }

}
