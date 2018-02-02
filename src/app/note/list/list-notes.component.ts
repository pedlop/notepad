import { Component, OnInit } from '@angular/core';

import { NoteService } from './../note.service';
import { Note } from './../note.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  noteForm: FormGroup;
  notes: Array<Note>;

  newText: FormControl;

  constructor(private noteService: NoteService, private formBuilder: FormBuilder) {
    this.notes = [];
    this.newText = new FormControl();

  }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      noteText: ['', Validators.required]
    });

    this.listNotes();
  }

  onClickCreateNote() {
    const note: Note = new Note();
    note.text = this.noteForm.controls.noteText.value;
    this.noteService.create(note);
    this.listNotes();
    this.noteForm.reset();
  }

  listNotes() {
    this.notes = this.noteService.list();
  }

  updateNote(id: string) {
    const note: Note = new Note();
    note.id = id;
    note.text = this.newText.value;
    console.log(this.noteService.update(note));
    this.listNotes();
    // this.newText.reset();
  }

  deleteNote(id: string) {
    console.log(this.noteService.delete(id));
    this.listNotes();
  }
}
