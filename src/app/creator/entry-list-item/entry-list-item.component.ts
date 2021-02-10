import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DataField } from 'src/app/models/data-field';

@Component({
  selector: 'app-entry-list-item',
  templateUrl: './entry-list-item.component.html',
  styleUrls: ['./entry-list-item.component.css']
})
export class EntryListItemComponent implements OnInit {

  @Input() name : string;
  @Input() type;
  @Input() optional : boolean = false;
  @Input() exlusive : boolean = false;

  @Input() display : boolean = true;


  @Output() field = new EventEmitter();
  @Output() del = new EventEmitter();

  current : DataField;

  datatypes : string[] = [
    "String","Boolean",
    "Integer","User",
    "Chat","ChatPhoto",
    "ChatPermissions","ChatLocation",
    "Animation","Audio",
    "","",
    "","",
    "","",
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.datatypes.indexOf(this.type));
  }

  deleteItem(){
    this.del.emit("");
  }
  update(){
    this.current = {
      name :this.name,
      type : this.datatypes[this.type],
      optional : this.optional == undefined ? undefined : this.optional,
      exclusive : this.exlusive == undefined ? undefined  : this.exlusive
    }
    console.log(this.current);

    this.field.emit(this.current)
  }
}
