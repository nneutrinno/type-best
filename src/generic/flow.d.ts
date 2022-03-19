import { Assert } from "../any/assert";
import { Custom } from "../generic";

import Basic = Custom.Basic;
import Generic = Custom.Generic;

declare namespace Flow {
    type Lib<State extends Custom.Basic, Generics extends Custom.Generic[]> = Generics extends [infer Item, ...infer Items] ? Lib<{ item: Custom.Execute<State, Assert<Item, Generic>> }, Assert<Items, Generic[]>> : State['item'];
    interface Custom<Generics extends Generic[]> extends Generic { compute: Lib<Basic<this['item']>, Generics> }
}
export import Flow = Flow.Lib;