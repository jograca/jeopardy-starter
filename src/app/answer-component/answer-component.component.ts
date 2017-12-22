import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer-component.component.html',
  styleUrls: ['./answer-component.component.css']
})
export class AnswerComponentComponent implements OnInit {

  overallScore = 0;
  userAnswer: string;

  @Input() questionInfo;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer() {
    console.log('reached!!');
    console.log(this.userAnswer);
    console.log(this.questionInfo.answer);
    // if (this.userAnswer = this.questionInfo.answer) {
    //   this.overallScore += this.questionInfo.value;
    // }
    this.userAnswer = '';
  }
}
