import { Flow } from "./generic/flow";

/**
 * @example of 'Custom' Generic use
 * declare namespace Custom {
 *      // 'c-b-a'
 *      type Computed = Chain<'abc', [
 *          Split.Custom<''>,
 *          Reverse.Custom,
 *          Join.Custom<'-'>,
 *      ]>;
 *  }
 */
export declare namespace Custom {
    type Execute<
        State extends Basic,
        Custom extends Generic,
        Computed extends Overlap = Overlap<State, Custom>
    > = [Custom] extends [never] ? never : Computed['compute'];

    interface Basic<Item = unknown> { item: Item }
    interface Generic<Item = unknown> extends Basic<Item> { compute: unknown }
    // @ts-expect-error
    interface Overlap<State extends Basic = Basic, Custom extends Generic = Generic> extends State, Custom {}
    type Chain<T, Generics extends Generic[]> = Execute<{ item: T }, Flow.Custom<Generics>>;
}