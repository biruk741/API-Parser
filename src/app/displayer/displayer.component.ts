import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { DataType } from '../models/data-type';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit {

  dataTypes : DataType[] = this.data.getDataTypes(true);

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.dataTypes = this.data.getDataTypes(true);
    console.log(this.dataTypes.length);
  }
}
