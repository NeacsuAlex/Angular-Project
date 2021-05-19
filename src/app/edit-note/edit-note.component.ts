import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../models/category';
import { Note } from '../note/note.component';
import { FiltrerService } from '../services/filtrer.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  subscription: Subscription;

  note: Note;
  categories: Category[];

  constructor(private noteService: NoteService, private filtrerService: FiltrerService, private router: Router) {
    this.subscription = this.noteService.currentNote.subscribe(note => this.note = note)
  }

  ngOnInit(): void {
    this.categories = this.filtrerService.geCategories()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editNote() {
    this.noteService.updateNote(this.note).subscribe();
    this.router.navigateByUrl('');
  }
}
