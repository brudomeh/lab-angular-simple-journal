import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  style:Object = {display:"none"}
  constructor(public jeS:JournalEntriesService) { }

  ngOnInit() {
  }

  toggleDisplay(){
    this.style["display"] =="none" ? this.style["display"]="inline-block" : this.style["display"]="none"
  }

}
