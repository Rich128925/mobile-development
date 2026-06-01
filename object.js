// object

let footballObject = {
  shape: "round",
  canBounce: "true",
  material: [""]
}


let folaObject = {
  name: 'Suberu Micheal Adefolarin',
  age: 30,
  isMarried: false,
  sex: 'male',
  height: 6,
  hobbies: ['travelling', 'reading books', 'Debating', 'public discourse'],
  // favClub: 'Liverpool'  ← commented out
};

// Accessing properties
console.log(folaObject.name);         // 'Suberu Micheal Adefolarin'
console.log(folaObject.sex);          // 'male'
console.log(folaObject['height']);    // 6
console.log(folaObject.hobbies[2]);   // 'Debating'

// Adding a NEW property (two ways)
folaObject.favClub = 'Liverpool';       // dot notation
folaObject['favClub'] = 'Liverpool';    // bracket notation

// Add new property
folaObject.favClub = 'Liverpool';

// Update existing property
folaObject.age = 31;

// Delete a property
delete folaObject.isMarried;

console.log(folaObject);

// Almost everything in Javascript is object 