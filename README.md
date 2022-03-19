# Type Custom

The most complete typescript lib

## Any
- [`Assert`](src/any/assert.d.ts) - Guarantees that a given type extends another

## List
- [`Join`](src/list/join.d.ts) - Concatenates all items of a list into a single text
- [`Map`](src/list/map.d.ts) - Iterates a list with a custom generic
- [`Reverse`](src/list/reverse.d.ts) - Reverses a list

## Object
- [`Get`](src/object/get.d.ts) - Obtains a property of an object without warnings
- [`ValueOf`](src/object/value-of.d.ts) - Get all values of an object/list

## String
- [`Split`](src/string/split.d.ts) - Breaks a text into pieces by a delimiter

## Union
Soon

## Generic

### Custom type execution in a more powerful way


```ts
// Prints 'c-b-a'
type Computed = Chain<'abc', [
    Split.Custom<''>,
    Reverse.Custom,
    Join.Custom<'-'>,
]>;
```

