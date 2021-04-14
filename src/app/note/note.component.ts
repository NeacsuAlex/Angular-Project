import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "Id2",
      title: "Second note",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: "Id3",
      title: "Third note",
      description: "Phasellus vestibulum lorem sed risus. Felis bibendum ut tristique et egestas quis ipsum. At augue eget arcu dictum varius duis at consectetur lorem. Malesuada nunc vel risus commodo viverra maecenas."
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  } 
}

export interface Note {
	id: string;
  title: string;
 	description: string;
}
