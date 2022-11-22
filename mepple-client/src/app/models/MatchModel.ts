import { Deserializable } from "./Deserializable";

export class MatchModel implements Deserializable {

  id:number = 0;
  team1_name:string = '';
  team2_name:string = '';
  team1_value:number = 0;
  team2_value:number = 0;

  deserialize(input: MatchModel) {
    Object.assign(this, input);
    return this;
  }
}