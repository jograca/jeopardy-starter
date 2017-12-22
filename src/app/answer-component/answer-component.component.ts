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
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer() {
    console.log('reached!!');

    if (this.userAnswer = this.questionInfo.answer) {
      this.overallScore += this.questionInfo.value;
    }
    this.userAnswer = '';
    this.buttonClicked.emit('string from the child');
  }
}
