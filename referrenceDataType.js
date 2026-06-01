// ARRAY AND OBJECT

let fruit1 = "apple";
let fruit2 = "Banana";
let fruit3 = "Orange";

let fruitsAmedLinkes = ["apple", "Banana", "Orange", "pineapple"];

let ahmedFristFruit = fruitsAmedLinkes[0];
let ahmedSecondFruit = fruitsAmedLinkes[1];
let ahmedThirdFruit = fruitsAmedLinkes[2];

// fruitsAmedLinkes[3] = 'pineapple'
let arrayLength = fruitsAmedLinkes.length;

let lastFruit = fruitsAmedLinkes[fruitsAmedLinkes.length - 1];

// fruitsAmedLinkes.pop() // pop removes the last element in the array
fruitsAmedLinkes.shift(); // shift remove the first element in the array

console.log(fruitsAmedLinkes);

// ➕ Adding Items

let fruits = ["apple", "Banana", "Orange", "pineapple"];

// push() - adds to the END
fruits.push("Mango");
console.log(fruits); // ['apple', 'Banana', 'Orange', 'pineapple', 'Mango']

// unshift() - adds to the BEGINNING
fruits.unshift("Strawberry");
console.log(fruits); // ['Strawberry', 'apple', 'Banana', 'Orange', 'pineapple']

// splice() - adds at a SPECIFIC position
fruits.splice(2, 0, "Watermelon"); // at index 2, remove 0, add 'Watermelon'
console.log(fruits); // ['apple', 'Banana', 'Watermelon', 'Orange', 'pineapple']

// ➖ Removing Items
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// pop() - removes from END
fruits.pop();
console.log(fruits); // ['apple', 'Banana', 'Orange']

// shift() - removes from BEGINNING
fruits.shift();
console.log(fruits); // ['Banana', 'Orange', 'pineapple']

// splice() - removes at SPECIFIC position
fruits.splice(1, 1); // at index 1, remove 1 item
console.log(fruits); // ['apple', 'Orange', 'pineapple']

// filter() - removes by CONDITION
let result = fruits.filter((fruit) => fruit !== "Banana");
console.log(result); // ['apple', 'Orange', 'pineapple']

// 🔍 Finding Items
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// indexOf() - finds index of item
console.log(fruits.indexOf("Orange")); // 2

// find() - finds first item matching condition
let found = fruits.find((fruit) => fruit === "Banana");
console.log(found); // 'Banana'

// findIndex() - finds index matching condition
let index = fruits.findIndex((fruit) => fruit === "Banana");
console.log(index); // 1

// includes() - checks if item exists
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("Mango")); // false

// 🔄 Transforming Items
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// map() - transforms every item
let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BANANA', 'ORANGE', 'PINEAPPLE']

// filter() - keeps items that pass condition
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); // ['Banana', 'Orange', 'pineapple']

// reduce() - reduces array to single value
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log(totalLength); // 26

// 🔀 Reordering Items
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// reverse() - reverses the array
fruits.reverse();
console.log(fruits); // ['pineapple', 'Orange', 'Banana', 'apple']

// sort() - sorts alphabetically
fruits.sort();
console.log(fruits); // ['Banana', 'Orange', 'apple', 'pineapple']

// sort() numbers
let numbers = [40, 5, 100, 2];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [2, 5, 40, 100]

// 🔗 Combining Arrays
let fruits = ["apple", "Banana"];
let moreFruits = ["Orange", "pineapple"];

// concat() - joins two arrays
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'Banana', 'Orange', 'pineapple']

// spread operator - also joins arrays
let combined = [...fruits, ...moreFruits];
console.log(combined); // ['apple', 'Banana', 'Orange', 'pineapple']

// flat() - flattens nested arrays
let nested = [
  ["apple", "Banana"],
  ["Orange", "pineapple"],
];
console.log(nested.flat()); // ['apple', 'Banana', 'Orange', 'pineapple']

// 🔁 Looping Arrays
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// forEach() - loops through every item
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: Banana
// 2: Orange
// 3: pineapple

// every() - checks if ALL items pass condition
let allLong = fruits.every((fruit) => fruit.length > 3);
console.log(allLong); // true

// some() - checks if AT LEAST ONE item passes condition
let hasApple = fruits.some((fruit) => fruit === "apple");
console.log(hasApple); // true

// 📋 Copying Arrays
let fruits = ["apple", "Banana", "Orange", "pineapple"];

// slice() - copies part of array
let someFruits = fruits.slice(1, 3); // from index 1 to 3
console.log(someFruits); // ['Banana', 'Orange']

// spread - full copy
let copy = [...fruits];
console.log(copy); // ['apple', 'Banana', 'Orange', 'pineapple']

// Array.from() - copy from iterable
let copy2 = Array.from(fruits);
console.log(copy2); // ['apple', 'Banana', 'Orange', 'pineapple']

//CategoryMethods➕ Addpush(), unshift(), splice()➖ Removepop(), shift(), splice(), filter()🔍 Findfind(), findIndex(), indexOf(), includes()🔄 Transformmap(), filter(), reduce()🔀 Reordersort(), reverse()🔗 Combineconcat(), flat(), spread ...🔁 LoopforEach(), every(), some()📋 Copyslice(), spread ..., Array.from()

//💡 The most import

// replace item in the array

let fruits = ["apple", "Banana", "Orange", "pineapple"];

fruits[1] = "Mango"; // replace index 1 (Banana) with Mango

console.log(fruits); // ['apple', 'Mango', 'Orange', 'pineapple']

