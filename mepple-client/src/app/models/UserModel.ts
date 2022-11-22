import { Deserializable } from "./Deserializable";

export class UserModel implements Deserializable {

  id:number = 0;
  name:string = '';
  email:string = '';
  password:string = '';

  deserialize(input: UserModel) {
    Object.assign(this, input);
    return this;
  }
}