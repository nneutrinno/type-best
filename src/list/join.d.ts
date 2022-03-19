import { Assert } from "../any/assert";
import { Custom } from "../generic";
import Generic = Custom.Generic;

declare namespace Join {
    type Lib<T, Delimiter extends string = '', Current extends string = ''> = T extends [infer Item, ...infer Items] ? Lib<Items, Delimiter, `${Current}${Current extends '' ? '' : Delimiter}${Assert<Item, string>}`> : Current;
    interface Custom<T extends string> extends Generic<unknown[]> { compute: Lib<this['item'], T> }
}
export import Join = Join.Lib;
