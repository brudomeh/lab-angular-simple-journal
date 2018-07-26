import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalEntriesService } from '../services/journal-entries.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from '../router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
