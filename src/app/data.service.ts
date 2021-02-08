import { Injectable } from '@angular/core';
import { DataField } from './models/data-field';
import { DataType } from './models/data-type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataTypes : DataType[] = [];

  constructor() { }

  getDataTypes(isTest : boolean) : DataType[]{
    return !isTest ? this.dataTypes : [
      {
        name:"Chat",
        description:"Literally just a chat.",
        fields:[
          {name:"text",type:"string",optional:false,exclusive:true},
          {name:"userID",type:"integer",optional:true,exclusive:true}
        ]
      },
      {
        name:"Message",
        description:"Literally just a message.",
        fields:[
          {name:"sticker",type:"string",optional:true,exclusive:false},
          {name:"userID",type:"string",optional:false,exclusive:true}
        ]
      },
    ];
  }
  addDataType(x : DataType){
    this.dataTypes.push(x);
  }
}
