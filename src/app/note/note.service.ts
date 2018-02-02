import { Note } from './note.model';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  notes: Array<Note>;

  constructor() {
    // const note: Note = <Note>[];
    this.notes = [{text: 'Testing updssate', id: '3'},{text: 'Testing update', id: '1'}];
  }

  create(note: Note): Note {
    note.id = Math.random().toString(36).substring(2);
    this.notes.push(note);
    console.log(this.notes);
    return note;
  }

  list(): Array<Note> {
    return this.notes;
  }

  update(note: Note) {
    let indexToUpdate;
    const not = this.notes.filter((desc, index)  => {
      if (desc.id === note.id) {
        indexToUpdate = index;
        return desc;
      }
      return 0;
    });
    // parseInt(indexToUpdate, 0);
    console.log(indexToUpdate);
    this.notes[indexToUpdate] = note;
    return not;
  }

  delete(id: string) {
    let indexToUpdate;
    const not = this.notes.filter((desc, index)  => {
      if (desc.id === id) {
        indexToUpdate = index;
        return desc;
      }
      return 0;
    });
    // parseInt(indexToUpdate, 0);
    console.log(indexToUpdate);
    this.notes.splice(indexToUpdate);
    console.log(this.notes);
    return not;
  }

  private indexToHandleNote() {

  }

}
