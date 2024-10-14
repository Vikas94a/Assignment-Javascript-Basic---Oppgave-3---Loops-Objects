/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

// your code here
/*
for (i = 0; i < people.length; i++) {
  // loops through the object
  if (people[i].name === "Otto") {
    // condition if name = Otto then skip it and continue
    continue;
  }
  people[i].city = cities[i]; //adding a value

  let male = people[i].male;
  male = true ? (people[i].titel = "Mr") : (people[i].titel = "Ms"); // Checking condition if person is male or female

  people[i].age += 2; // Increment the age by 2

  people[i].hobbies.unshift("coding"); // Adding coding in hobbies array
}
console.log(people);
*/
/*
Part 2 finding the combiding age and average age
*/

/*
let averageAge = 0;
let combinedAge = 0;

for (i = 0; i < people.length; i++) { //loop through the people.length
  combinedAge += people[i].age; // adding age in combinedAge
}
averageAge = combinedAge / people.length; // find the averageAge which is 25.75

console.log(combinedAge);
console.log(averageAge);
*/
/******************************************************************************
2.

Make the following function:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/
//
/*
function diceRoller(arrayLength, diceRange) {
  let result = [];
  for (let i = 0; i < arrayLength; i++) {
    result.push(Math.ceil(Math.random() * diceRange));
  }
  return result;
}

console.log(diceRoller(20, 20));
*/
/******************************************************************************
3.

Make the following function:

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/
/*
function trimAndLowerCase(words) {
  let answer = [];  // empty arry for storing value of word after changing
  let result = " ";
  for (let word of words) {
    answer.push(word.toLowerCase().trim()); // pusing 
    result = answer.join(" "); // joining arrays into string 
  }
  return result;
}

let words = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];
*/
// console.log(trimAndLowerCase(words));
/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Make a function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/
/*
const greeting = [
  {
    language: "english",
    word: "hello",
  },
  {
    language: "italian",
    word: "ciao",
  },
  {
    language: "french",
    word: "salut",
  },
  {
    language: "german",
    word: " hallo",
  },
  {
    language: "spanish",
    word: "hola",
  },
  {
    language: "polish",
    word: "czesc",
  },
];

function helloChecker(str) {
  for (let i = 0; i < greeting.length; i++) {
    let detect = greeting[i].word;
    if (str.toLowerCase() === detect) {
      return `Hello detected in ${greeting[i].language}`;
    } else return `No HELLO detected.`;
  }
}

console.log(helloChecker("hello"));
*/

/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/
/*
function doubleSwap(string, charA, charB) {
  //your code here
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === charA) {// swap charA with charB
      newString += charB;
    } else if (string[i] === charB) {
      newString += charA; // Swap charB with charA
    } else {
      newString += string[i]; // Keep other characters as they are
    }
  }
  return newString;
}

console.log(doubleSwap("it's a game time", "e", "g"));
*/