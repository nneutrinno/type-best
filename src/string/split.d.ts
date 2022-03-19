import Generic = Custom.Generic;

declare namespace Split {
    type Lib<T, Delimiter extends string = '', Current extends unknown[] = []> = T extends `${infer Item}${Delimiter}${infer Items}` ? Lib<Items, Delimiter, [...Current, Item]> : T extends '' ? Current : [...Current, T];
    interface Custom<T extends string> extends Generic<string> { compute: Lib<this['item'], T> }
}
import Split = Split.Lib;
