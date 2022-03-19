import { Custom } from "../generic";
import Generic = Custom.Generic;


declare namespace ValueOf {
    type Lib<T> = T extends unknown[] ? T[number] : T[keyof T];
    interface Custom extends Generic { compute: Lib<this['item']> }
}
export import ValueOf = ValueOf.Lib;