import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {TodoService } from './services/todo.service'; 
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    //default - to be removed
   //constructor(private _httpService: Http) { }
   // apiValues: string[] = [];
   // ngOnInit() {
   //     this._httpService.get('/api/values').subscribe(values => {
   //         this.apiValues = values.json() as string[];
   //     });
   // }
   constructor(private todoService: TodoService) { }

}
