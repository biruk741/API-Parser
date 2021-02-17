import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
<div class="input-group" style="margin: 30px 0px 0px 0px">
  <input type="text" (keyup)="update()" [(ngModel)]="searchQuery" name="searchQuery" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button (click)="clear()" class="btn btn-outline-secondary" type="button">X</button>
    <button class="btn btn-outline-secondary" type="button">🔍</button>
  </div>
  <p *ngIf="noResult">No results found.</p>
</div>
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  searchQuery: string;
  @Input() noResult = false;

  @Output() search = new EventEmitter();

  ngOnInit(): void {
  }

  update() {
    this.search.emit(this.searchQuery)
  }
  clear(){
    this.searchQuery = "";
  }
}
