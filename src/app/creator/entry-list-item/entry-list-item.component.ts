import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DataField } from 'src/app/models/data-field';
import { DataType } from 'src/app/models/data-type';

@Component({
  selector: 'app-entry-list-item',
  templateUrl: './entry-list-item.component.html',
  styleUrls: ['./entry-list-item.component.css']
})
export class EntryListItemComponent implements OnInit {

  @Input() isForMethods: boolean = false;

  @Input() name: string;
  @Input() type;
  @Input() index;
  @Input() optional: boolean = false;

  @Input() exclusiveLabel: string;

  @Input() exlusive: boolean = false;

  @Input() description: string;


  @Input() display: boolean = true;

  displayedTypes: string[];


  @Output() field = new EventEmitter();
  @Output() del = new EventEmitter();

  current: DataField;
  finished: boolean = false;

  datatypes: string[];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getParameterTypes();
    this.getTypes();
  }

  deleteItem() {
    this.del.emit("");
  }
  update() {
    this.current = {
      name: this.name,
      type: this.type,
      description: this.description,
      optional: this.optional == undefined ? undefined : this.optional,
      exclusive: this.exclusiveLabel == undefined ? undefined : this.exclusiveLabel
    }
    console.log(this.current);

    this.field.emit(this.current)
  }

  getParameterTypes() {
    this.data.loadDataTypes(data => {
      this.datatypes = ["String", "Integer", "Boolean", "True"]
        .concat((data as DataType[])
          .map(dataType => dataType.name));
      this.finished = true;
    })
    // this.data.loadDataTypes().then(data => {

    // })
  }
  getLoadingText() {
    return !this.finished ? "Loading..." : "";
  }
  getTypes() {
    if (Array.isArray(this.type)) this.displayedTypes = this.type;
    else this.displayedTypes = [this.type];
  }
}
