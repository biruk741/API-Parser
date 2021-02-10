import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buttonText = "Upload and Save";

  constructor(private data : DataService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  upload(){
    this.buttonText = "Uploading..."
    this.data.uploadDataTypes().then(data=>{
      this.buttonText = "Upload and Save";
    });
  }
}
