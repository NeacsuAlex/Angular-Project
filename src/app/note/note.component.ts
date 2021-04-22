import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {  
 
  notes:Note[];
  @Input() selectedCategory:string;

  constructor(private noteService:NoteService) {
   }

  ngOnInit(): void {
    this.notes=this.noteService.getNotes();
  }
  
  ngOnChanges():void{
    //alert(this.selectedCategory);
    this.notes=this.noteService.getFilteredNotes(this.selectedCategory);
  }
}

export interface Note {
	id: string;
  title: string;
 	description: string;
  category:string;
}
