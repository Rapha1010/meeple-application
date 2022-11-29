import { Deserializable } from "./Deserializable";

export class UserModel implements Deserializable {

  userId:string = '';
  name:string = '';
  email:string = '';
  password:string = '';
  lastUpdateDate:string = '';
  creationDate:string = '';
  isAdmin: boolean = false;

  deserialize(input: UserModel) {
    Object.assign(this, input);
    return this;
  }
}