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

  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer() {
    if (this.userAnswer === this.questionInfo.answer) {
      this.overallScore += this.questionInfo.value;
      this.userMessage = 'You Won $' + this.questionInfo.value + '!';
    } else {
      this.userMessage = 'Incorrect!'
    }
    this.userAnswer = '';
  }

  newQuestion() {
    this.userMessage = '';
    this.newGame.emit();
  }

}
