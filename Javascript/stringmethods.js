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
let fruit="apple, banana, ornage, mango"
let fruits=fruit.slice(0,5);
console.log(fruits);

//splite()
let bio="sagar 15 react 40000";
let arr=bio.split("");
console.log(arr);

let text =

`The quick
brown fox
jumps over
the lazy dog`;
console.log(text)

let firstName="saurav";
let lastName="kanojia"
let fullName=`Welcome ${firstName} ${lastName}`;
console.log(fullName)
