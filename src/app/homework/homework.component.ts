import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  constructor() { }

  dates:Date[]=[new Date("2010-01-20"),new Date("2010-01-21"),new Date("2010-01-22"),new Date("2010-01-23"),new Date("2010-01-24"),new Date("2010-01-25")]

  colorText: string = "Content color change"
  selectedColor: string = ""
  backgroundColor: string = ""
  
  ngOnInit(): void {
  }

  setBackground() {
    this.backgroundColor = this.selectedColor;
  }

}
