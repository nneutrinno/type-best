/// <reference path="../any/assert.d.ts" />

declare namespace Join {
    type Lib<T, Delimiter extends string = '', Current extends string = ''> = T extends [infer Item, ...infer Items] ? Lib<Items, Delimiter, `${Current}${Current extends '' ? '' : Delimiter}${Assert<Item, string>}`> : Current;
    interface Custom<T extends string> extends Generic<unknown[]> { compute: Lib<this['item'], T> }
}
import Join = Join.Lib;
