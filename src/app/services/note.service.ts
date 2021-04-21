import { Injectable } from '@angular/core';
import { Note } from '../note/note.component';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  notes: Note[]=[];
  
  constructor() { }

  serviceCall() {
    console.log("this is a service call");
  }

  getNotes() {
    return this.notes;
  }

  addNote(note:Note){
    this.notes.push(note);
  }
}
