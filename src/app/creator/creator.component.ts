import { Component, OnInit } from '@angular/core';
import { DataField } from '../models/data-field';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  dataFields : DataField[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addField(){
    this.dataFields.push(new DataField("","",false,false));
    console.log("There are " + this.dataFields.length);
  }
  deleteItem(i:number){
    this.dataFields.splice(i,1);
  }
}
