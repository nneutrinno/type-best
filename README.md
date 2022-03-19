# Type Best

The most complete typescript lib



## Any
- Assert - Guarantees that a given type extends another

## List
- Join - Concatenates all items of a list into a single text
- Map - Iterates a list with a custom generic
- Reverse - Reverses a list

## Object
- Get - Obtains a property of an object without warnings
- [`ValueOf`](object/src/value-of.d.ts) - Get all values of an object/list

## String
- Split - Breaks a text into pieces by a delimiter

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

