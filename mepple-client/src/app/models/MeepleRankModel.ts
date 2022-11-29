import { Deserializable } from "./Deserializable";

export class MeepleRankModel implements Deserializable {

    name: string = '';
    points: number = 0;

    deserialize(input: MeepleRankModel) {
        Object.assign(this, input);
        return this;
    }
}