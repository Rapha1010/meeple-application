import { Deserializable } from "./Deserializable";

export class UserModel implements Deserializable {

  userId:string = '';
  name:string = '';
  email:string = '';
  password:string = '';

  deserialize(input: UserModel) {
    Object.assign(this, input);
    return this;
  }
}