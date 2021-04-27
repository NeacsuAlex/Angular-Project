import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {

  notes: Note[];

  private _selecteCategory: string;

  @Input()
  set selectedCategory(val: string) {
    this._selecteCategory = val;
    this.notes = this.noteService.getFilteredNotes(this.selectedCategory);
  }
  get selectedCategory(): string {
    return this._selecteCategory;
  }

  private _keyWord: string;

  @Input()
  set keyWord(val: string) {
    this._keyWord = val;
    this.notes = this.noteService.getFilteredByKeyWordNotes(this.keyWord);
  }
  get keyWord(): string {
    return this._keyWord;
  }

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(): void {
    //alert(this.selectedCategory);
    //this.notes=this.noteService.getFilteredNotes(this.selectedCategory);
  }
}

export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
}
