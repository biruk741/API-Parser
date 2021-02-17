import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataTypes: boolean;
  title = 'api-parser';
  constructor(private router: Router) {
    // router.events.subscribe((url:any) => console.log(url));
  }
  ngOnInit(): void {
    this.refreshPage();
  }
  refreshPage() {
    this.dataTypes = this.router.url === '/' || this.router.url === '/datatypes';
  }
}
