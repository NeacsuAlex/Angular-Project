import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteTitle:string
  noteDescription:string
  
  constructor(private_router:Router, private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  addNote():void
  {
    alert(this.noteTitle)
    alert(this.noteDescription)
  }

}
