import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit {

  @Input() questionInfo;
  @Output() playingCategories = new EventEmitter();

  categories = [];

  constructor() { }

  ngOnInit() {
  }

  getCategories(): void {
    for (let i = 0; i < 3; i ++) {
      this.categories.push(this.questionInfo.catetory);
      console.log(this.categories[1]);
      console.log(this.categories[1]);
      console.log(this.categories[1]);
    }

  }
    setCategories(): void {
      this.playingCategories.emit();
    }

}
