import { Custom } from "../generic";
import Generic = Custom.Generic;
import Basic = Custom.Basic;

declare namespace Map {
    type Lib<State extends Custom.Basic, Custom extends Custom.Generic, Item = State['item']> = { [key in keyof Item]: Custom.Execute<{ item: Item[key] }, Custom> };
    interface Custom<Gen extends Custom.Generic> extends Generic<unknown[]> { compute: Lib<Basic<this['item']>, Gen> }
}
export import Map = Map.Lib;