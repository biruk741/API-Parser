import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { DataType } from '../models/data-type';
import { Method } from '../models/method';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit, OnChanges {

  @Input() isForMethods : boolean = false;

  displayData : DataType[] | Method[] = [];
  displayTemp:DataType[] | Method[] = [];

  noResult : boolean = false;

  loaded: boolean = false;

  constructor(private data: DataService) { }

  ngOnChanges(): void {
    this.displayData = this.isForMethods ?
    this.data.getMethods() :
    this.data.getDataTypes();
  }

  ngOnInit(): void {
    // if(!this.isForMethods) this.data.loadDataTypes().then(data => {
    //   this.displayData = data as DataType[];
    //   this.displayTemp = data as DataType[];
    //   this.loaded = true;
    //   console.log(this.displayData);
    // });
    // else
    if(this.isForMethods) this.data.loadMethods(data=>{
      this.displayData = data as Method[];
      this.displayTemp = data as Method[];
      this.loaded = true;
    })
    else this.data.loadDataTypes(data=>{
      this.displayData = data as DataType[];
      this.displayTemp = data as DataType[];
      this.loaded = true;
    })

    // .then(data => {
    //   this.displayData = data as Method[];
    //   this.displayTemp = data as Method[];
    //   this.loaded = true;
    //   console.log(data);
    // });

  }


  delete(index: number) {
    if(!this.isForMethods) this.data.deleteDataType(index);
    else this.data.deleteMethod(index);
  }
  edit(data, index: number) {
    if(!this.isForMethods){
      this.data.editDataType(index, data);
      (this.displayData as DataType[]).splice(index, 1, data)
    }
    else{
      this.data.editMethod(index, data);
      (this.displayData as Method[]).splice(index, 1, data)
    }
    console.log(this.displayData);
  }
}
