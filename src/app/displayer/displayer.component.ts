import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { DataType } from '../models/data-type';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit, OnChanges {

  dataTypes;

  loaded: boolean = false;

  constructor(private data: DataService) { }

  ngOnChanges(): void {
    this.dataTypes = this.data.getDataTypes();
  }

  ngOnInit(): void {
    this.data.loadDataTypes().then(data => {
      this.dataTypes = data;
      this.loaded = true;
      console.log(data);
    });
  }


  delete(index: number) {
    this.data.deleteDataType(index);
  }
  edit(dataType: DataType, index: number) {
    this.data.editDataType(index, dataType);
    this.dataTypes.splice(index, 1, dataType)
    console.log(this.dataTypes);
  }
}
