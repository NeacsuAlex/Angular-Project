import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  titleColor: string = "red"
  title: string = "Add note"
  noteContent: string = ""
  
  currentDate = Date.now()
  dates:Date[]=[new Date("2010-01-20"),new Date("2010-01-21"),new Date("2010-01-22"),new Date("2010-01-23"),new Date("2010-01-24"),new Date("2010-01-25")]

  colorText: string = "Content color change"
  selectedColor: string = ""
  backgroundColor: string = ""
  show=false

  constructor() {

  }

  ngOnInit(): void {
  }

  setTitle() {
    this.title = "TEST";
    this.show=true;
  }

  setBackground() {
    this.backgroundColor = this.selectedColor;
  }
}
