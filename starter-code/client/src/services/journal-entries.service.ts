import  { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from '../../node_modules/rxjs';


@Injectable()
export class JournalEntriesService {
    entries:Array<object>=[]
    entry:object={}
    constructor(public http:Http){}

    getEntries():Observable<Array<object>>{
        return this.http.get("http://localhost:3000/api/journal-entries").pipe(
            map((res:Response)=>{
                this.entries = res.json()
                return this.entries
            })
        
        )
    }

    getEntry(id):Observable<object>{
        return this.http.get(`http://localhost:3000/api/journal-entries/${id}`).pipe(
            map((res:Response)=>{
                this.entry = res.json()
                return this.entry
            })
        
        )
    }

    addEntry(title,content):Observable<object>{
         return this.http.post(`http://localhost:3000/api/journal-entries`,{title,content}).pipe(
            map((res:Response)=>{
                 console.log("Entry added successfully!!")
                 return res.json()
            })
        
        )
    }

}