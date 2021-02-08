import { Component, Input, OnInit } from '@angular/core';
import { DataField } from 'src/app/models/data-field';

@Component({
  selector: 'app-display-list-item',
  templateUrl: './display-list-item.component.html',
  styleUrls: ['./display-list-item.component.css']
})
export class DisplayListItemComponent implements OnInit {


  @Input() dataFields : DataField[];
  @Input() name : string;
  @Input() description : string;


  constructor() { }

  ngOnInit(): void {
  }

}
