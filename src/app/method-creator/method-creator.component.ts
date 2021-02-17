import { Component, OnInit } from '@angular/core';
import { ValidationErrorInterface } from 'validator.ts/ValidationErrorInterface';
import { Validator } from 'validator.ts/Validator';
import { DataService } from '../data.service';
import { DataType } from '../models/data-type';
import { Method } from '../models/method';
import { Parameter } from '../models/parameter';

@Component({
  selector: 'app-method-creator',
  templateUrl: './method-creator.component.html',
  styleUrls: ['./method-creator.component.css']
})
export class MethodCreatorComponent implements OnInit {

  parameters: Parameter[] = [];
  name: string;
  description: string;
  returnType: string | string[];

  errors: ValidationErrorInterface[];

  temp: Parameter[] = [];
  parameterTypes: string[];

  finished : boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getParameterTypes((data, status) => {
      this.parameterTypes = data;
      this.finished = status;
    }
    );
  }

  addParameter() {
    this.parameters.push({
      name: "",
      type: [],
      description: this.description,
      optional: false,
      exclusive: ""
    });
    this.temp.push({
      name: "",
      type: [],
      description: this.description,
      optional: false,
      exclusive: ""
    });
  }
  save() {
    let obj: Method = { name: this.name, description: this.description, parameters: this.temp, returnType: this.returnType }
    let validator = new Validator();
    let errors = validator.validate(obj);

    console.log(obj);


    if (errors.length == 0) {
      this.dataService.addMethod(obj)
      this.name = "";
      this.description = "";
      this.parameters = [];
      this.temp = [];
    } else {
      this.errors = errors;
    }
  }
  deleteItem(i: number) {
    this.parameters.splice(i, 1);
    this.temp.splice(i, 1);
  }

  change(i: number, parameter: Parameter) {
    this.temp[i] = parameter;
  }
  getParameterTypes() {
    // this.data.loadDataTypes().then(data => {
    //   this.parameterTypes = ["String", "Integer", "Boolean", "True"]
    //     .concat((data as DataType[])
    //       .map(dataType => dataType.name))
    // })
    this.dataService.loadDataTypes(data => {
      this.parameterTypes = ["String", "Integer", "Boolean", "True"]
        .concat((data as DataType[])
          .map(dataType => dataType.name));
      // this.finished = true;
    })
  }
}
