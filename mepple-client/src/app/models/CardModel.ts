import { Deserializable } from "./Deserializable";

export class CardModel implements Deserializable {

  id:number = 0;
  name:string = '';
  color:string = '';
  collecation:string = '';

  deserialize(input: CardModel) {
    Object.assign(this, input);
    return this;
  }
}