import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { FiltrerService } from '../services/filtrer.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteTitle: string;
  noteDescription: string;
  selectedCategory: string;

  categories: Category[];

  constructor(private noteService: NoteService, private filtrerService: FiltrerService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.filtrerService.geCategories()
  }

  addNote(): void {
    //const note:Note={id:"2",ownerId:this.ownerId,title:this.noteTitle,description:this.noteDescription,category:this.selectedCategory};
    this.noteService.createNote(this.noteTitle, this.noteDescription, this.selectedCategory).subscribe();
    this.router.navigateByUrl('');
  }

}
