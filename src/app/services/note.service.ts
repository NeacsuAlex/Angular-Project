import { Injectable } from '@angular/core';
import { Note } from '../note/note.component';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private defaultNote: Note = { ownerId: "", description: "", title: "", categoryId: "" };
  private noteSource = new BehaviorSubject<Note>(this.defaultNote);
  currentNote = this.noteSource.asObservable();

  notes: Note[] = [];
  readonly baseUrl = "https://notesapitrimbleexperience.azurewebsites.net";
  ownerId = '00000000-0000-0000-0000-000000000008';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("this is a service call");
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseUrl}/notes?ownerId=${this.ownerId}`, this.httpOptions);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  getFilteredNotes(filteredID: string): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseUrl}/notes?ownerId=${this.ownerId}`, this.httpOptions).pipe(
      map((notes) => notes.filter((note) => (note.categoryId == filteredID))));
  }

  getFilteredByKeyWordNotes(keyWord: string): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseUrl}/notes?ownerId=${this.ownerId}`, this.httpOptions).pipe(
      map((notes) => notes.filter((note) => (this.containsWord(note.description.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, ''), keyWord) || this.containsWord(note.title.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, ''), keyWord)))));
  }

  containsWord(text: string, keyWord: string): boolean {
    text.replace(/\s{2,}/g, " ");
    if (text.includes(keyWord))
      return true;
    return false;
  }

  createNote(noteTitle: string, noteDescription: string, noteCategoryId: string) {
    let note = {
      ownerId: this.ownerId,
      description: noteDescription,
      title: noteTitle,
      categoryId: noteCategoryId
    }
    return this.httpClient.post(`${this.baseUrl}/notes`, note, this.httpOptions);
  }

  updateNote(note: Note) {
    let updateNote = {
      ownerId: this.ownerId,
      description: note.description,
      title: note.title,
      categoryId: note.categoryId
    }
    return this.httpClient.put(`${this.baseUrl}/notes/${note.id}`, updateNote, this.httpOptions);
  }

  deleteNote(noteId: string) {
    return this.httpClient.delete(`${this.baseUrl}/notes/${noteId}`, this.httpOptions);
  }

  changeNote(note: Note) {
    this.noteSource.next(note);
  }
}
