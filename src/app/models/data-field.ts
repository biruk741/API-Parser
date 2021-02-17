export class DataField{
  name : string;
  type : string;
  description : string;
  optional : boolean = null;
  exclusive : string = null;
  constructor(  name : string,
    type : string,
    optional : boolean,
    exclusive : boolean){}
}
