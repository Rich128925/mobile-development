// // conditional statement

// let yearOfBirth = 2009;
// let currentYear = 2026;

// let age = currentYear - yearOfBirth; // 17

// if (age >= 18) {
//   console.log('The user can vote!');
// } else {
//   console.log('The user cannot vote yet!');
// }

// // Output: "The user cannot vote yet!"



// let isNigeriaCitizen = true;
// let yearOfBirth = 2005;
// let currentYear = 2026;

// let age = currentYear - yearOfBirth; // 21

// if (isNigeriaCitizen || age >= 18) {
//   console.log('You are eligible to vote!');
// } else {
//   console.log('You are not eligible to vote!');
// }

// Output: "You are eligible to vote!"



// let isNigeriaCitizen = true;
// let yearOfBirth = 2010;
// let currentYear = 2026
// let votingAge = 18;
// let isACriminal = true 

// let age = currentYear - yearOfBirth;        // 16
// let yearCanVote = yearOfBirth + votingAge;  // 2010 + 18 = 2028
// let yearsLeft = yearCanVote - currentYear;  // 2028 - 2026 = 2

// if (isNigeriaCitizen && age >= 18) {
//   console.log('You are eligible to vote! 🗳️');
// } else {
//   console.log(`You cannot vote yet!`);
//   console.log(`You can start voting in: ${yearCanVote}`);
//   console.log(`Years left: ${yearsLeft} years`);
// }

// // Output: "You cannot vote yet!"
// // Output: "You can start voting in: 2028"
// // Output: "Years left: 2 years"



// let isNigeriaCitizen = true;
// let yearOfBirth = 2010;
// let currentYear = 2028;
// let votingAge = 18;
// let isACriminal = false;

// let age = currentYear - yearOfBirth;       // 16
// let yearCanVote = yearOfBirth + votingAge; // 2028
// let yearsLeft = yearCanVote - currentYear; // 2

// if (isNigeriaCitizen && age >= 18) {       // first condition
//   if (isACriminal) {                       // second condition (nested)
//     console.log('YOU CANNOT VOTE BECAUSE YOU ARE A CRIMINAL 🚫');
//   } else {
//     console.log('You can vote! 🗳️');
//   }
// } else {
//   console.log('You cannot vote yet!');
//   console.log(`You can start voting in: ${yearCanVote}`);
//   console.log(`Years left: ${yearsLeft} years`);
// }



// a program that checks if a person can drive or not

// let isNigeriaCitizen = true;
// let yearOfBirth = 2018;
// let currentYear = 2028;
// let age = currentYear - yearOfBirth; // 18
// let isACriminal = false;
// let driverLicense = true;

// if (isNigeriaCitizen && !isACriminal && age >= 18 && driverLicense) {
//   console.log('You are eligible to drive! 🚗');
// } else if (!isNigeriaCitizen) {
//   console.log('You must be a Nigerian citizen to drive! 🇳🇬');
// } else if (isACriminal) {
//   console.log('You cannot drive! Criminals are not allowed! 🚫');
// } else if (age < 18) {
//   console.log('You are too young to drive!');
//   console.log(`You can start driving in: ${yearOfBirth + 18}`);
// } else if (!driverLicense) {
//   console.log('You cannot drive without a driver license! 🪪');
// }

// // Output: "You are eligible to drive! 🚗"


// let isANigerianCitizen = false;
// let currentYear = 2026;
// let yearOfBirth = 2007;
// let isACriminal = false;
// let hasAValidDriverLicense = true;

// let age = currentYear - yearOfBirth; // 19

// if (isANigerianCitizen && age >= 20) {
//   console.log('According to the Nigerian constitution, you can drink beer! 🍺');

// } else if (!isANigerianCitizen && age >= 18) {
//   console.log('Since you are a foreigner and you are above 18, you can drink beer! 🍺');

// } else {
//   console.log('You cannot drink beer at all in Nigeria!! 🚫');
// }

// // Output: "Since you are a foreigner and you are above 18, you can drink beer! 🍺"

// let country = 'Nigerian';

// let age = 20;                    // if statement

// if( age >= 18 && country == 'Nigerian'){
//   console.log('You can get a driver license');
  
// }


// else statement 
let age = 17;

if( age > 18){
  console.log('You are an adult');
  
}

else if(age >= 16){
  console.log('You are a teenager.');
  
}

else{
  console.log('You are a minor');
  
}