import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataField } from './models/data-field';
import { DataType } from './models/data-type';

const url = "https://api.jsonbin.io/b/60233f81435c323ba1c4117f";
const headers = {
  headers: new HttpHeaders()
    .set('content-type', 'application/json')
    // .set('private', 'false')
    .set('versioning','false')
    .set('secret-key','$2b$10$u1qoNjCM1jf30vkZ/yfxzO98wP9DhhoJrJnM7MoaQXFovMUkFtc4y')
    // .set('Access-Control-Allow-Origin', '*')
    // .set("Access-Control-Allow-Credentials", "true")
    // .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    // .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataTypes: DataType[];

  constructor(private http: HttpClient) { }

  getDataTypes(): DataType[] {
    return this.dataTypes;
  }

  async loadDataTypes(): Promise<void | DataType[]>{
    return await this.http.get<DataType[]>(url+"/latest", headers).toPromise()
    .then(data=>{
      console.log(data);
      this.dataTypes = data;
      return data;
    });
  }

  async uploadDataTypes(): Promise<DataType[]> {
    return await this.http.put<DataType[]>(url, JSON.stringify(this.dataTypes), headers)
    .toPromise().then(data => {
      console.log(data);
      return data;
    });
  }

  editDataType(index: number, dataType: DataType) {
    this.dataTypes.splice(index, 1, dataType);
    console.log(dataType);

  }
  addDataType(x: DataType) {
    this.dataTypes.unshift(x);
  }
  deleteDataType(index: number) {
    this.dataTypes.splice(index, 1);
    console.log("Deleted!");
  }
}
