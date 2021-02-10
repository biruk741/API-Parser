import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DataField } from 'src/app/models/data-field';

@Component({
  selector: 'app-display-list-item',
  templateUrl: './display-list-item.component.html',
  styleUrls: ['./display-list-item.component.css']
})
export class DisplayListItemComponent implements OnInit {


  @Input() dataFields: DataField[];
  @Input() name: string;
  @Input() description: string;

  @Input() display: boolean;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private toast : ToastrService) { }

  ngOnInit(): void {
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
        this.toast.success("Success","Changes applied!");
      console.info(this.dataFields);
    }
  }

  deleteEntry() {
    this.delete.emit();
  }

  update(index, dataField) {
      this.dataFields[index] = dataField;
  }

}
