import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buttonText = "Export JSON";
  @Input() dataTypes: boolean;

  constructor(private data: DataService, private toastr: ToastrService,private router : Router) { }

  ngOnInit(): void {
  }

  upload() {
    // this.buttonText = "Uploading dataTypes..."
    // this.data.uploadMethods();
    // this.data.uploadDataTypes();
    // this.data.uploadMethods()
    this.data.downloadToFile(this.router.url);
  }


}
