import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  userAnswer: string;
  overallScore = 0;

  @Input() questionInfo;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer() {
    console.log('reached!!');
    console.log(this.questionInfo.answer);
    console.log(this.userAnswer);

    if (this.userAnswer = this.questionInfo.answer) {
      this.overallScore += this.questionInfo.value;
    }
    this.userAnswer = '';
  }
}
