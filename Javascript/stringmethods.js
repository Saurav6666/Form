//concat()
let text1 = "sea";
let text2 = "food";
let result = text1.concat(" ", text2); //for providing space between words
let result1 = text1.concat(text2); //for marging words

console.log(result);
console.log(result1);
//trim()
// let text = "  Hi Saurav ";
// let name = text.trim();
// console.log(name);

//trim start
// let name="  saurav kanojia    ";
// let name1=name.trimStart();
//  console.log(name1);

//trimEnd()
// let name="  saurav kanojia    ";
// let name1=name.trimEnd();
//  console.log(name1);

// slice()
let fruit = "apple, banana, ornage, mango";
let fruits = fruit.slice(0, 5);
console.log(fruits);

// //splite()
// let bio="sagar 15 react 40000";
// let arr=bio.split("");
// console.log(arr);

let text = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

let firstName = "saurav";
let lastName = "kanojia";
let fullName = `Welcome ${firstName} ${lastName}`;
console.log(fullName);
/////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5, 3, 6];

const calback = (ei, i) => {
  return i === 3;
};
const resu = arr.filter(calback);
console.log(resu);

/////////////////////////////////////////////
const newarr = arr.filter((cv, i) => {
  return cv == 3;
});
console.log(newarr);
////////////////////////////////////////////
const array = [1, 2, 3, 4, 5];
const callback = (element, index) => {
  return index == 3;
};
const results = array.filter(callback);

console.log(results);
/////////////////////////////////////////////
const studentage = [12, 12, 25, 13, 15, 10, 16];
const age = (el, index) => {
  return index <= 4;
};
// const age=(el,i)=>{
//     return el <= 15
// }
const list = studentage.filter(age);
console.log(list);

const numbers = [-1, -2, -3, -4, 1, 2, 3, 4, 5, 6, 9, 11];
const number = (el) => {
  return el % 2 === 1 && el > 0;
};
const primenumber = numbers.filter(number);
console.log(primenumber);
/////////////////////////////////////////////

const words = ["cat", "dog", "elephant", "bird", "lion"];
const oddLengthWords = words.filter((word) => word.length % 2 !== 0);
console.log(oddLengthWords); // Output: ["dog", "bird", "lion"]

/////////////////////////////////////////////
const cars = ["BMW", "AUDI", "AMG", "THAR", "TESLAB"];
const filteritems = (arr, i) => {
  return arr.filter((el) => el.toLowerCase().includes(i.toLowerCase()));
};
console.log(filteritems(cars, "H"));
/////////////////////////////////////////////

const rolnumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let mathclass = "";
rolnumbers.forEach(myfunction);
function myfunction(value, index, array) {
  mathclass += `my foreEach result is ${value}.${" "}`;
}
console.log(mathclass);
/////////////////////////////////////////////

cons
 names = ["saurav", "shubham", "babita", "karan", "vishal"];

const capital=(value)=> 
  value.map((word)=> word[0].toUpperCase() + word.slice(1)).join("");
  let value = capital(names)
console.log(capital);

// const str =[  "shubham","babita","sourav"];

// const capitalize = (input) =>
//   input.map((word)
//  => word[0].toUpperCase() + word.slice(1)).join("");

// let result = capitalize(str)
// console.log(`my result is : ${result}`)