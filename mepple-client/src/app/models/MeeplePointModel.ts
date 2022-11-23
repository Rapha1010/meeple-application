import { Deserializable } from "./Deserializable";

export class MeeplePointModel implements Deserializable {

    point: string = '';
    obs: string = '';
    creationDate: string = '';
    lastUpdateDate: string = '';

    deserialize(input: MeeplePointModel) {
        Object.assign(this, input);
        return this;
    }
}