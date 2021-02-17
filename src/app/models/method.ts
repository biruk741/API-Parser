import { Parameter } from "./parameter";

export class Method{
  name : string;
  description : string;
  parameters : Parameter[];
  returnType : string | string[];
}
