// function parameter
// function can be reusable 
// loop in javascript 
function sumOfTwoNumber(x, y) {
  let sum = x + y;
  console.log(sum);
}

sumOfTwoNumber(5, 10);
sumOfTwoNumber(2, 35);


const currentYear = 2026,

const age = currentYear - yearOfBirth;



const BoluObject = {             
  name: "Solomon Boluwatife",
  yearOfBirth: 2005,
  sex: "male",                    
  nationality: "Nigerian",        
};

const BoluObject = {             
  name: "Solomon femi",
  yearOfBirth: 2016,
  sex: "Female",                    
  nationality: "Nigerian",        
};

const BoluObject = {             
  name: "Ireayomide",
  yearOfBirth: 2009,
  sex: "male",                    
  nationality: "Ghana",        
};

const BoluObject = {             
  name: "Olayinka",
  yearOfBirth: 2010,
  sex: "male",                    
  nationality: "American",        
};

// function checkVotingEligibity(name, yearOfBirth, nationality) {



// }



// ✅ Use array of objects instead of repeating const BoluObject
const people = [
  { name: "Solomon Boluwatife", yearOfBirth: 2005, sex: "male",   nationality: "Nigerian" },
  { name: "Solomon Femi",       yearOfBirth: 2016, sex: "Female", nationality: "Nigerian" },
  { name: "Ireayomide",         yearOfBirth: 2009, sex: "male",   nationality: "Ghana"    },
  { name: "Olayinka",           yearOfBirth: 2010, sex: "male",   nationality: "American" },
];

function checkVotingEligibility(name, yearOfBirth, nationality) {
  const currentYear = 2026;
  const age = currentYear - yearOfBirth;
  const NATIONALITY = Nigerian

  // ✅ Check nationality first
  if (nationality !== "Nigerian") {
    console.log(`${name} - You are not eligible to vote in the Nigerian election! 🚫`);

  // ✅ Check age second
  } else if (age < 18) {
    console.log(`${name} - You are too young to vote! You can vote in ${yearOfBirth + 18} 🕐`);

  // ✅ All conditions pass 
  } else {
    console.log(`${name} - You are eligible to vote! 🗳️`);
  }
}

// ✅ Loop through all people
people.forEach(person => {
  checkVotingEligibility(person.name, person.yearOfBirth, person.nationality);
});

// Define all objects
const folaObject = {
  name: "Fola",
  yearOfBirth: 2000,
  nationality: "Nigerian",
};

const aHMEDObject = {
  name: "Ahmed",
  yearOfBirth: 2009,
  nationality: "Nigerian",
};

const elizebethObject = {
  name: "Elizebeth",
  yearOfBirth: 2005,
  nationality: "Ghana",
};

// ✅ Accept whole object instead of 3 separate params
function checkVotingEligibility(person) {
  const currentYear = 2026;
  const age = currentYear - person.yearOfBirth;

  if (person.nationality !== "Nigerian") {
    console.log(`${person.name} - Not eligible! Not a Nigerian citizen 🚫`);
  } else if (age < 18) {
    console.log(`${person.name} - Too young! Can vote in ${person.yearOfBirth + 18} 🕐`);
  } else {
    console.log(`${person.name} - Eligible to vote! 🗳️`);
  }
}

// ✅ Call with whole object - much cleaner!
checkVotingEligibility(folaObject);
checkVotingEligibility(aHMEDObject);
checkVotingEligibility(elizebethObject);


// ===========================
// CONSTANTS
// ===========================

const NATIONALITY = "NIGERIAN";  // uppercase to match toUpperCase()
const CURRENT_YEAR = 2026;

// ===========================
// OBJECTS
// ===========================

const folaObject      = { name: "Fola",             yearOfBirth: 2000, nationality: "Nigerian" };
const aHMEDObject     = { name: "Ahmed",            yearOfBirth: 2009, nationality: "nigerian" }; // lowercase - toUpperCase() handles this ✅
const elizebethObject = { name: "Elizebeth",        yearOfBirth: 2005, nationality: "Ghana"    };
const boluwatifeObject= { name: "Solomon Boluwatife",yearOfBirth: 2005, nationality: "NIGERIAN" }; // uppercase - toUpperCase() handles this ✅
const olayinkaObject  = { name: "Olayinka",         yearOfBirth: 2010, nationality: "American" };

// ===========================
// ARRAY OF ALL PEOPLE
// ===========================

const people = [
  folaObject,
  aHMEDObject,
  elizebethObject,
  boluwatifeObject,
  olayinkaObject,
];

// ===========================
// VOTING ELIGIBILITY FUNCTION
// ===========================

function checkVotingEligibility(name, yearOfBirth, nationality) {
  const age = CURRENT_YEAR - yearOfBirth;
  const yearCanVote = yearOfBirth + 18;
  const yearsLeft = yearCanVote - CURRENT_YEAR;

  console.log('----------------------------');
  console.log(`Name: ${name}`);

  // ✅ toUpperCase() handles "nigerian", "NIGERIAN", "Nigerian" all the same
  if (nationality.toUpperCase() !== NATIONALITY) {
    console.log(`${name} is not eligible to vote in the Nigerian election 🚫`);

  } else if (CURRENT_YEAR - yearOfBirth < 18) {
    console.log(`${name} is not old enough to vote! 🕐`);
    console.log(`Can vote in: ${yearCanVote}`);
    console.log(`Years left: ${yearsLeft} year(s)`);

  } else {
    console.log(`${name} is eligible to vote! 🗳️`);
  }
}



people.forEach(person => {
  checkVotingEligibility(person.name, person.yearOfBirth, person.nationality);
});


// ===========================
// OBJECTS
// ===========================

const folaObject = {
  name: "Fola",
  yearOfBirth: 2000,
  nationality: "Nigerian",
};

const aHMEDObject = {
  name: "Ahmed",
  yearOfBirth: 2009,
  nationality: "Nigerian",
};

const elizebethObject = {
  name: "Elizebeth",
  yearOfBirth: 2005,
  nationality: "Ghana",
};

const boluwatifeObject = {
  name: "Solomon Boluwatife",
  yearOfBirth: 2005,
  nationality: "Nigerian",
};

const olayinkaObject = {
  name: "Olayinka",
  yearOfBirth: 2010,
  nationality: "American",
};

// ===========================
// ARRAY OF ALL PEOPLE
// ===========================

const people = [
  folaObject,
  aHMEDObject,
  elizebethObject,
  boluwatifeObject,
  olayinkaObject,
];

// ===========================
// VOTING ELIGIBILITY FUNCTION
// ===========================

function checkVotingEligibility(person) {
  const currentYear = 2026;
  const age = currentYear - person.yearOfBirth;
  const yearCanVote = person.yearOfBirth + 18;
  const yearsLeft = yearCanVote - currentYear;

  console.log('----------------------------');
  console.log(`Name        : ${person.name}`);
  console.log(`Age         : ${age}`);
  console.log(`Nationality : ${person.nationality}`);

  // Check 1 - Nationality
  if (person.nationality !== "Nigerian") {
    console.log(`Status      : ❌ Not eligible! Not a Nigerian citizen`);

  // Check 2 - Age
  } else if (age < 18) {
    console.log(`Status      : ⏳ Too young to vote!`);
    console.log(`Can vote in : ${yearCanVote}`);
    console.log(`Years left  : ${yearsLeft} year(s)`);

  // Check 3 - All passed
  } else {
    console.log(`Status      : ✅ Eligible to vote! 🗳️`);
  }

  console.log('----------------------------');
}

// ===========================
// RUN FOR ALL PEOPLE
// ===========================

people.forEach(person => checkVotingEligibility(person));