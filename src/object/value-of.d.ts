
declare namespace ValueOf {
    type Lib<T> = T extends unknown[] ? T[number] : T[keyof T];
    interface Custom extends Generic { compute: Lib<this['item']> }
}
import ValueOf = ValueOf.Lib;