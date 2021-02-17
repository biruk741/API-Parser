import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { DataField } from '../models/data-field';

import { DataType } from '../models/data-type';
import { Validator } from "validator.ts/Validator";
import { ValidationErrorInterface } from 'validator.ts/ValidationErrorInterface';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {


  dataFields: DataField[] = [];
  name: string;
  description: string;

  errors: ValidationErrorInterface[];

  temp: DataField[] = [];



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addField() {
    this.dataFields.push({
      name: "",
      type: "",
      description: "",
      optional: false,
      exclusive: ""
    });
    this.temp.push({
      name: "",
      type: "",
      description: "",
      optional: false,
      exclusive: ""
    });
  }
  save() {
    let obj: DataType = { name: this.name, description: this.description, fields: this.temp }

    console.log(obj);

    this.dataService.addDataType(obj)
    this.name = "";
    this.description = "";
    this.dataFields = [];
    this.temp = [];

  }
  deleteItem(i: number) {
    this.dataFields.splice(i, 1);
    this.temp.splice(i, 1);
  }

  change(i: number, dataField: DataField) {
    this.temp[i] = dataField;
  }


}
