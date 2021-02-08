import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entry-list-item',
  templateUrl: './entry-list-item.component.html',
  styleUrls: ['./entry-list-item.component.css']
})
export class EntryListItemComponent implements OnInit {

  @Input() name : string;
  @Input() type : string;
  @Input() optional : boolean;
  @Input() exlusive : boolean;

  @Output() del = new EventEmitter();
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
  }

  deleteItem(){
    this.del.emit("");
  }
}
