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
  show=false

  constructor() {

  }

  ngOnInit(): void {
  }

  setTitle() {
    this.title = "TEST";
    this.show=true;
  }
}
