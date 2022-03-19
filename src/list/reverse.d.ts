import { Custom } from "../generic";
import Generic = Custom.Generic;

declare namespace Reverse {
    type Lib<T, Current extends unknown[] = []> = T extends [infer Item, ...infer Items] ? Lib<Items, [Item, ...Current]> : Current;
    interface Custom extends Generic<unknown[]> { compute: Lib<this['item']> }
}
export import Reverse = Reverse.Lib;