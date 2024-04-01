//first filter function

// const rollnumber=[1001,1002,1003,1004,1005,1006,1007]

//  const result=(value, index, array)=>{
//     return index<4
//  }
//  const number= rollnumber.filter(result)
//  console.log(number)

// const rollnumber=[11,12,13,14,15,16,17]

//  const result=(value, index)=>{
//     return value<15
//  }
//  const number= rollnumber.filter(result)
//  console.log(number)
////////////////////////////////////////////////////////////////
//  1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const numbers = [4, 5, 9, 3, 8, 7, 2];
const greaterthanFive = numbers.filter((val) => {
  return val >= 5;
});
console.log(greaterthanFive);

//  2) Given an array of numbers, return a new array that only includes the even numbers.
const allNumbers = [4, 5, 9, 3, 8, 7, 2];
const evenNumbers = allNumbers.filter((val) => {
  return val % 2 == 0;
});
console.log(evenNumbers);

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const animalName = ["dog", "wolf", "by", "family", "eaten", "camping"];
const nameLength = animalName.filter((val, index) => {
  return index <= 4;
});
console.log(nameLength);

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];
const clubMembers = people.filter((val, index) => {
  //   return val.member == true;
  if (val.member === true) {
    return val;
  }
});
console.log(clubMembers);

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const member = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];
const inMatrix = member.filter((val, index) => {
  //   return val.age>18
  if (val.age > 18) {
    return val;
  }
});
console.log(inMatrix);
// /////////////////////////////////////////////////////////////////////
const inputnumbers = [1, 2, 3, 4, 5];
const addnum = inputnumbers.map((val, index) => {
  return Math.pow(val, 2);
});
console.log(addnum);
// /////////////////////////////////////////////////////////////////////
const input = [1, -4, 12, 0, -3, 29, -150];
const roundOf = input
  .filter((val, index) => {
    return val > 0;
  })
  .reduce((sum, num) => {
    return sum + Math.round(num);
  });
console.log(roundOf);
// Calculate median and mean
const inputval = [12, 46, 32, 64];
//////////////////////////////////////////////////////////////////
// Get name initials
const fullName = "George Raymond Richard Martin";
const shortName = fullName
  .split(" ")
  .map((val) => {
    return val[0];
  })
  .join("");
console.log(shortName);
// Age difference from the youngest and oldest
const peopleAge = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
const age = peopleAge.map((agee) => {
  return agee.age;
});
const agedperson = [
  Math.min(...age),
  Math.max(...age),
  Math.max(...age) - Math.min(...age),
];
console.log(agedperson);

//  Numeronyms
const Numeronyms = "Every developer likes to mix kubernetes and javascript";
const newstring = Numeronyms.split("").map((val)=>{
    return val[0]+(val.length-2)
  }).join(" ");
  console.log(newstring)
