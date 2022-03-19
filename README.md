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
- ValueOf - Get all values of an object/list

## String
- Split - Breaks a text into pieces by a delimiter

## Union
Soon


## Generic

### Custom Generics execution in a more flexible way

// Prints 'c-b-a'
type Computed = Chain<'abc', [
    Split.Custom<''>,
    Reverse.Custom,
    Join.Custom<'-'>,
]>;

