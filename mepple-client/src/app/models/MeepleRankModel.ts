import { Deserializable } from "./Deserializable";

export class MeepleRankModel implements Deserializable {

    name: string = '';
    point: string = '';

    deserialize(input: MeepleRankModel) {
        Object.assign(this, input);
        return this;
    }
}