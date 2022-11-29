import { Deserializable } from "./Deserializable";

export class UserModel implements Deserializable {

  userId:string = '';
  name:string = '';
  email:string = '';
  password:string = '';
  lastUpdateDate:string = '';
  creationDate:string = '';

  deserialize(input: UserModel) {
    Object.assign(this, input);
    return this;
  }
}