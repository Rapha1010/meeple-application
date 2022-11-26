import { Deserializable } from "./Deserializable";

export class MeeplePointModel implements Deserializable {
    pointId: string = '';
    point: string = '';
    obs: string = '';
    creationDate: string = '';
    lastUpdateDate: string = '';
    user:any = {
        name:'',
        email:'',
        userId:''
    };

    deserialize(input: MeeplePointModel) {
        Object.assign(this, input);
        return this;
    }
}