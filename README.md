# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ssakonjo/lotide`

**Require it:**

`const _ = require('@ssakonjo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `AssertEqual`: is a function that takes in two parameters (actual and expected) and returns a message if the two arguments are equal or not.
* `eqArrays`: is a function that takes in two arrays as parameters and returns true if the two arrays have the same values.
* `assertArraysEqual`: is a function that logs a message to tell if the arrays passed into eqArrays function are equal or not.
* `eqObjects`: is a function that takes in two objects as parameters and returns true if the two objects have the same values.
* `assertObjectsEqual`: is a function that logs a message to tell if the objects passed into eqObjects function are equal or not.
* `countLetters`: is a function that takes in a string as a parameter and returns an object of the count of each letter.
* `countOnly`: is a function that takes in two parameters (allItems and itemsToCount) and returns an object of the count of only the itemsToCount.
* `findKey`: is a function that takes in an object and a callback function as parameters and returns the key that has a value that matches the value of the callback function.
* `findKeyByValue`: is a function that takes in an object and a value and returns the key that has a value that matches the second argument (value).
* `flatten`: is a function that accepts a nested array as a parameter and converts the nested array into a regular array with the same values.
* `head`: is a function that takes in an array as a parameter and returns the first element of the array.
* `tail`: is a function that takes in an array as a parameter and returns an array of elements without the first element in the original array.
* `middle`: is a function that takes in an array as a parameter and returns an array of middle elements (returns only one element if the length of array is odd).
* `letterPositions`: is a function that takes in a sentence and returns an object of the position of each letter.
* `map`: is a function that takes in an array and a callback function as parameters and creates a new array populated with the results of calling a provided function on every element in the calling array.
* `takeUntil`: is a function that takes in an array and a callback function as parameters and returns a new array of elements before the callback returns a truthy value.
* `without`: is a function that takes in two parameters (source and itemsToRemove) and returns and array of elements in source array without the items in the itemsToRemove array.




