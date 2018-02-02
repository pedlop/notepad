import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NoteService } from './note.service';
import { ListNotesComponent } from './list/list-notes.component';

@NgModule({
  declarations: [ ListNotesComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ ListNotesComponent ],
  providers: [ NoteService ],
})
export class NoteModule {}
