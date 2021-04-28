import { Injectable } from '@angular/core';
import { Note } from '../note/note.component';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [];

  constructor() { }

  serviceCall() {
    console.log("this is a service call");
  }

  getNotes() {
    return this.notes;
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  getFilteredNotes(filteredID: string): Note[] {
    return this.notes.filter((note) => note.category == filteredID);
  }

  getFilteredByKeyWordNotes(keyWord: string): Note[] {
    return this.notes.filter((note) => (this.containsWord(note.description.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split(" "), keyWord) || this.containsWord(note.title.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').split(" "), keyWord)));
  }

  containsWord(words: string[], keyWord: string): boolean {
    for (let word of words) {
      if (word==keyWord)
        return true;
    }
    return false;
  }
}
