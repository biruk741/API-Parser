import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataField } from './models/data-field';
import { DataType } from './models/data-type';
import { Method } from './models/method';

const dataTypeUrl = "https://api.npoint.io/89a2609d802c75878470";
const methodsUrl = "https://api.npoint.io/89a2609d802c75878470";
const headers = {
  headers: new HttpHeaders()
    .set('content-type', 'application/json')
    .set('versioning', 'false')
    .set('secret-key', '$2b$10$u1qoNjCM1jf30vkZ/yfxzO98wP9DhhoJrJnM7MoaQXFovMUkFtc4y')
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  downloadToFile(slash : string) {
      const blob = new Blob([JSON.stringify(slash.includes("methods") ? this.methods : this.dataTypes)], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
  }

  dataTypes: DataType[];
  methods: Method[];

  constructor(private http: HttpClient, private database: AngularFireDatabase) { }

  getDataTypes(): DataType[] {
    return this.dataTypes;
  }

  load() {
    this.database.object("test").valueChanges()
      .subscribe(data => {
        console.log(data)
      })
  }

  loadDataTypes(fun?: (n: any[]) => any) {
    return this.database.list("datatypes").valueChanges()
      .subscribe(data => {
        this.dataTypes = data as DataType[];
        fun(data)
      })
  }

  async uploadDataTypes() {
    console.log(JSON.stringify(this.dataTypes));
    return this.database.object("datatypes")
      .set(JSON.parse(JSON.stringify(this.dataTypes)))

    // return await this.http.put<DataType[]>(dataTypeUrl, JSON.stringify(this.dataTypes), headers)
    //   .toPromise().then(data => {
    //     console.log(data);
    //     return data;
    //   });
  }

  editDataType(index: number, dataType: DataType) {
    this.dataTypes.splice(index, 1, dataType);
    console.log(dataType);
    this.uploadDataTypes();

  }
  addDataType(x: DataType) {
    this.dataTypes = [x, ...this.dataTypes]
    this.uploadDataTypes();
  }
  deleteDataType(index: number) {
    this.dataTypes.splice(index, 1);
    console.log("Deleted!");
    this.uploadDataTypes();
  }

  getMethods(): Method[] {
    return this.methods;
  }

  // -------------- Methods start here-------------//

  async loadMethods(fun?: (data: any) => any) {
    return this.database.list("methods").valueChanges()
      .subscribe(data => {
        this.methods = data as Method[];
        fun(data)
      })
    // return await this.http.get<Method[]>(methodsUrl, headers)
    //   .toPromise().then(data => {
    //     console.log(data);
    //     this.methods = data;
    //     return data;
    //   });
  }

  async uploadMethods() {
    console.log(JSON.stringify(this.methods));
    return this.database.object("methods")
      .set(JSON.parse(JSON.stringify(this.methods)))
  }

  editMethod(index: number, method: Method) {
    this.methods.splice(index, 1, method);
    console.log(method);
    this.uploadMethods();

  }
  addMethod(x: Method) {
    this.methods.unshift(x);
    this.uploadMethods();

  }
  deleteMethod(index: number) {
    this.methods.splice(index, 1);
    console.log("Deleted!");
    this.uploadMethods();

  }
  getParameterTypes(fun: (data, loader) => any) {
    this.loadDataTypes(data => {
      let toBeChanged = ["String", "Integer", "Boolean", "True"]
        .concat(
          (data as DataType[])
            .map(dataType => dataType.name)

        ).sort((a, b) => a === b ? 0 : (a > b ? 1 : -1))
      fun(toBeChanged, true)
    })
  }
}
