import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers:[JournalEntriesService]
})
export class EntryListComponent implements OnInit {
  entries:Array<object>=[]
  constructor(public jeS:JournalEntriesService) { }

  ngOnInit() {
    this.jeS.getEntries().subscribe(entries=>{
      this.entries=entries
    })
  }

}
