import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DataType } from 'src/app/models/data-type';
import { Parameter } from 'src/app/models/parameter';

@Component({
  selector: 'app-parameter-list-item',
  templateUrl: './parameter-list-item.component.html',
  styleUrls: ['./parameter-list-item.component.css']
})
export class ParameterListItemComponent implements OnInit {

  @Input() name: string;
  @Input() type = [];

  tempType: string;

  @Input() optional: boolean = false;

  @Input() exclusiveLabel: string;

  @Input() exlusive: boolean = false;

  @Input() description: string;


  @Input() display: boolean = true;

  parameterTypes: string[];

  finished : boolean;


  @Output() field = new EventEmitter();
  @Output() del = new EventEmitter();

  current: Parameter;

  // datatypes: string[] = [
  //   "String", "Boolean",
  //   "Integer", "User",
  //   "Chat", "ChatPhoto",
  //   "ChatPermissions", "ChatLocation",
  //   "Animation", "Audio",
  //   "", "",
  //   "", "",
  //   "", "",
  // ]
  constructor(private data: DataService) { }

  add() {
    this.type.unshift(this.tempType);
    this.tempType = "";
  }

  ngOnInit(): void {
    this.data.getParameterTypes((data,status)=>{
      this.parameterTypes = data;
      this.finished = status;
    });
  }

  deleteItem() {
    this.del.emit("");
  }
  update() {
    this.current = {
      name: this.name,
      type: this.getType(),
      description: this.description,
      optional: this.optional == undefined ? undefined : this.optional,
      exclusive: this.exclusiveLabel == undefined ? undefined : this.exclusiveLabel
    }
    console.log(this.current);

    this.field.emit(this.current)
  }

  getType(): string | string[] {
    if (this.type.length > 0 && this.tempType.length > 0)
      return [...this.type, this.tempType];
    else if (this.type.length > 0 && this.tempType.length == 0)
      return this.type;
    else return this.tempType;
  }

}
