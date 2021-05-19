import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { interval, Subject, Subscription } from "rxjs";
import { switchMap, takeUntil } from 'rxjs/operators';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {


  private unsubscribe$ = new Subject();
  notes: Note[];
  private _selecteCategory: string;

  @Input()
  set selectedCategory(val: string) {
    this._selecteCategory = val;
    this.noteService.getFilteredNotes(this.selectedCategory).pipe(takeUntil(this.unsubscribe$)).subscribe((notesFromServer) => {
      this.notes = notesFromServer;
    });
  }
  get selectedCategory(): string {
    return this._selecteCategory;
  }

  private _keyWord: string;

  @Input()
  set keyWord(val: string) {
    this._keyWord = val;
    this.noteService.getFilteredByKeyWordNotes(this.keyWord).pipe(takeUntil(this.unsubscribe$)).subscribe((notesFromServer) => {
      this.notes = notesFromServer;
    });
  }
  get keyWord(): string {
    return this._keyWord;
  }

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().pipe(takeUntil(this.unsubscribe$)).subscribe((notesFromServer) => {
      this.notes = notesFromServer;
    });
  }

  ngOnChanges(): void {
    //alert(this.selectedCategory);
    //this.notes=this.noteService.getFilteredNotes(this.selectedCategory);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  deleteNote(noteId: string) {
    this.noteService
      .deleteNote(noteId)
      .pipe(switchMap(() => this.noteService.getNotes()),takeUntil(this.unsubscribe$))
      .subscribe((response) => (this.notes = response));
  }

  editNote(note: Note) {
    this.noteService.changeNote(note);
    this.router.navigateByUrl('editNote');
  }
}

export interface Note {
  id?: string;
  ownerId: string;
  title: string;
  description: string;
  categoryId: string;
}
