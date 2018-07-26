import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry:object ={}
  id:number
  constructor(public route:ActivatedRoute,public fes:JournalEntriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params["id"]
      this.fes.getEntry(this.id).subscribe(entry=>{
        this.entry=entry
      })
    })
  }

}
