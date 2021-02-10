import { IsLength, MinLength } from "validator.ts/decorator/Validation";
import { DataField } from "./data-field";

export class DataType{
  fields : DataField[];
  @IsLength(10, 20)/**(2, { message: "Name is too short." })**/ name: string;
  @MinLength(10, /*{ message: "Description is too short" }*/) description: string;
}
