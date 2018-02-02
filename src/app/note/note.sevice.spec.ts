import { Note } from './note.model';
import { NoteService } from './note.service';
import { TestBed } from '@angular/core/testing';

describe('NoteService', () => {

  let noteService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteService
      ]
    });
    noteService = TestBed.get(NoteService);
  });

  it('should create an instance', () => {
    expect(noteService).toBeDefined();
  });

  it('should be created a note', () => {
    const ola = new Note();
    const not = noteService.create({text: 'Falslasjdof  fodj go'});
    expect(not).toBeDefined();
    expect(not.id).toBeDefined();
    expect(ola instanceof Note).toBeTruthy();
  });

  it('should be NOT created a note', () => {
    const ola = new Note();
    const not = noteService.create({text: undefined});
    expect(not.text).toBeUndefined();
    // expect(not.id).toBeUndefined();
  });

  it('should be list all notes', () => {
    const notes = noteService.list();
    // esperar 0 como resultado // como verificar um objeto  se é um array
    expect(notes.length).toBe(2);
    expect(notes instanceof Array).toBeTruthy();
  });

  it('should be updated a note', () => {
    const n: Note = new Note();
    n.id = '1';
    n.text = 'drfsr';
    const up = noteService.update(n);
    expect(up).toBeDefined();
    expect(up[0].id).toBe(n.id);
  });

  it('should be deleted a note', () => {
    const up = noteService.delete('1');
    expect(up).toBeDefined();
    // expect(up).toBeDefined();
  });

  it('should be NOT deleted a note', () => {
    const up = noteService.delete('2');
    expect(up[0]).toBeUndefined();
  });

});
