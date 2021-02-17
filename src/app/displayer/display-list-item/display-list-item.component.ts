import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DataField } from 'src/app/models/data-field';
import { DataType } from 'src/app/models/data-type';
import { Method } from 'src/app/models/method';
import { Parameter } from 'src/app/models/parameter';

@Component({
  selector: 'app-display-list-item',
  templateUrl: './display-list-item.component.html',
  styleUrls: ['./display-list-item.component.css']
})
export class DisplayListItemComponent implements OnInit {

  @Input() data;
  @Input() isForMethods: boolean = false;


  @Input() dataFields: DataField[] | Parameter[];
  @Input() name: string;
  @Input() description: string;
  @Input() returnType : string | string[];

  @Input() display: boolean;

  clickedDelete: boolean = false;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
    this.dataFields = this.isForMethods ?
      (this.data as Method).parameters :
      (this.data as DataType).fields;

    if (true) {
      let temp = this.data.parameters;
      console.log(this.data);

    }

  }

  editEntry() {

    if (this.display) {
      this.display = false;
    }
    else {
      this.display = true;
      this.edit.emit(
        {
          name: this.name,
          description: this.description,
          fields: this.dataFields
        });
      this.toast.success("Success", "Changes applied!");
      console.info(this.dataFields);
    }
  }

  deleteEntry() {
    if (this.clickedDelete) {
      this.delete.emit();
      this.clickedDelete = false;
    }
    else {
      this.clickedDelete = true;
    }

  }

  getDeleteText() {
    return this.clickedDelete ? "Confirm Delete?" : "Delete";
  }

  update(index, dataField) {
    this.dataFields[index] = dataField;
  }

}
