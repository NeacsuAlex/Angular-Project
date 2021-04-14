import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  dates:Date[]=[new Date("2010-01-20"),new Date("2010-01-21"),new Date("2010-01-22"),new Date("2010-01-23"),new Date("2010-01-24"),new Date("2010-01-25")]

  colorText: string = "Content color change"
  selectedColor: string = ""
  backgroundColor: string = ""
  hyphenText:string="Hyphen"

  id:number;
  
  constructor(
    private _router:Router,
    private _activatedRoute:ActivatedRoute  
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter=>{
      this.id=parameter.id
      console.log(parameter)
    })
  }

  setBackground() {
    this.backgroundColor = this.selectedColor;
  }

}
