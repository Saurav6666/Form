//first map function

//undefine
// const rollnumber = [1001, 1002, 1003, 1004, 1005, 1006, 1007];

// const result = (value, index, array) => {
//   return ;
// };
// const number = rollnumber.map(result);
// console.log(number);

///////////////////////////////////////////////////////////////////////////////////////////////

//chaning method
//  const rollnumber=[1001,1002,1003,1004,1005,1006,1007];

//  const result=(value, index, array)=>{
//     return value
//  }
//  const number= rollnumber.filter((cv, id)=>{
//     return cv<=1005
//  }).map(result)
//  console.log(number)

///////////////////////////////////////////////////////////////////////////////////////////////
const rollnumber = [1001, 1002, 1003, 1004, 1005, 1006, 1007];
const newArr = [5, 2, 3, 4];
const result = (value, index, array) => {
  return ` ${value * 2} and ${array}`;
};
const number = newArr.map(result);
console.log(number);

///////////////////////////////////////////////////////////////////////////////////////////////
// another way
const sweetArray = [2, 3, 4, 5, 6, 35];
const sweeterarray = sweetArray.map((sweetItem) => {
  return sweetItem * 4;
});
console.log(sweeterarray);
///////////////////////////////////////////////////////////////////////////////////////////////

const name = "Sammy";
const map = Array.prototype.map;

const newName = map.call(name, (eachLetter) => {
  return `${eachLetter}a`;
});

console.log(newName);
///////////////////////////////////////////////////////////////////////////////////////////////
// How to Reformat JavaScript Array Objects
const myUsers = [
  { name: "shark", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" },
];

const usersByLikes = myUsers.map((item) => {
  const container = [];

  container[item.name] = item.likes;
  container.age = item.name.length * 10;

  return container;
});

console.log(usersByLikes);
///////////////////////////////////////////////////////////////////////////////////////////////
const arry = [1, 2, 3, 4, 5, 6];

const StringItUP = (val) => {
  return val.toString();
};
const newstring = arry.map(StringItUP);
console.log(newstring);
//////////////////////////////////////{name: Saurav, age: 56},/////////////////////////////////////////////////////////
// make first leter of array to capital;
const UpperCase = ["raj", "Ram", "roHan", "shuBHam"];
const UpperItUp = (val, indx) => {
  const lower = val.toLowerCase();
  return val[0].toUpperCase() + lower.slice("1");
};
const CorrectName = UpperCase.map(UpperItUp);
console.log(CorrectName);
///////////////////////////////////////////////////////////////////////////////////////////////
// Make an array of strings of the names
const EmployData = [
  { name: "Saurav", age: 56 },
  { name: "karan", age: 56 },
  { name: "babita", age: 56 },
  { name: "raj", age: 56 },
];
const onlyNames = EmployData.map((employeNames) => {
  return `${employeNames.name}`;
});
console.log(onlyNames);
///////////////////////////////////////////////////////////////////////////////////////////////
// according to age get approval

const userData = [
  { name: "Saurav", age: 20 },
  { name: "karan", age: 26 },
  { name: "babita", age: 21 },
  { name: "raj", age: 22 },
];
const eligible = userData.map((item) => {
  if (item.age <= 23) {
    return `${item.name} you are  eligible`;
  } else {
    return `${item.name} you are not eligible`;
  }
});
console.log(eligible);
///////////////////////////////////////////////////////////////////////////////////////////////
// Make an array of the names in h1s, and the ages in h2s
const myData = [
  { name: "Saurav", age: 20 },
  { name: "karan", age: 26 },
  { name: "babita", age: 21 },
  { name: "raj", age: 22 },
];
const modifyData = myData.map((val) => {
  return "<h1>" + val.name + "</h1>" + "<h2>" + val.age + "</h2>";
});
console.log(modifyData);

///////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const numbersarray=[1,2,3,4,5,6,7,8,9];

// const required= numbersarray.filter()
///////////////////////////////////////////////////////////////////////////////////////////////

// change object element value
const sampleObject = {
  Name: "saurav",
  Department: "react",
  age: "24",
};
// sampleObject.Department=".net"  //method1
// sampleObject["age"]="25"       //method2

let x = "node";
sampleObject.Department = x; //method3
// let y=[".net","angular","node"]
// sampleObject.Department=y         //method to create array for existing element in object

console.log(sampleObject);
///////////////////////////////////////////////////////////////////////////////////////////////

// const sampleObj=[{
//     Name : "saurav",
//     Department : "react",
//     address : {city :"mohali", houseAddress : "HE-230"},
//     age : "24"
// },
// {
//     Name : "saurav1",
//     Department : "node",
//     address : {city :"mohali", houseAddress : "HE-230"},
//     age : "25"
// }]

// const city=sampleObj.address
// console.log(city)

// const sampleobj = {
//   name: "saurav",
//   department: "react",
//   subject: ["english", "math"],
// }; //add nested elemet in object
// sampleObject["address"] = {
//   street_address: "mohali,phase 7",
// };
// sampleObject.address.street_address = "mohali,phase 8";
// console.log("sampleObject", sampleObject);

///////////////////////////////////////////////////////////////////////////////////////////////

// const sampleArr = [
//   {
//     name: "saurav",
//     department: "react",
//     subject: ["english", "math"],
//   },
//   {
//     name: "shubham",
//     department: "node",
//     subject: ["english", "math"],
//   },
// ];
// const mapCallback = (element) => {
//   if (element.name === "shubham") {
//     element.department = "react";
//   }
//   return element;
// };
// const modifiedArr = sampleArr.map(mapCallback);
// console.log`${modifiedArr}`;

///////////////////////////////////////////////////////////////////////////////////////////////

// const myObject = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// const newData = myObject.cars.map((ele) => {
//   if (ele.name === "Ford") {
//     console.log(ele, "ppppp");
//   }
// });
// ///////////////////////////////////////////////////////////////////////////////////////////////

const myArrObject = [
  {
    name: "Johan",
    age: 30,
    cars: [
      { name: "Ford1", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW2", models: ["320", "X3", "X5"] },
      { name: "Fiat3", models: ["500", "Panda"] },
    ],
  },
  {
    name: "Johansick",
    age: 30,
    cars: [
      { name: "Ford4", models: ["Fiesta1", "Focus2", "Mustang3"] },
      { name: "BMW5", models: ["3200", "X33", "X55"] },
      { name: "Fiat6", models: ["5001", "Panday"] },
    ],
  },
  {
    name: "Johanwick",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta0", "Focus1", "Mustang2"] },
      { name: "BMW", models: ["3201", "X320", "X53"] },
      { name: "Fiat", models: ["5001", "Pandax"] },
    ],
  },
];

let fordModel = [];
myArrObject.map((user) => {
  if (user.name === "Johansick") {
    user.cars.map((car) => {
      if (car.name === "Ford4") {
        fordModels = [...car.models];
      }
    });
  }
});
console.log(fordModel);

// let fordModels = [];
// for (let i = 0; i < myArrObject.length; i++) {
//     const user = myArrObject[i];
//     if (user.name === "Johan") {
//         const cars = user.cars;
//         for (let j = 0; j < cars.length; j++) {
//             const car = cars[j];
//             if (car.name === "Ford1") {
//                 fordModels = [...car.models];
//                 break;
//             }
//         }
//     }
// }
// console.log(fordModels);

// const data = [
//   {
//     name: "vishal",
//     lastname: "sagar",
//     city: "kurali",
//     anotherdata: {
//       age: 24,
//       area: ["kurali", "mohali", "ropar"],
//       final: [
//         {
//           data: "area",
//           pincode: "140103"
//         }
//       ]
//     }
//   }
// ];

// const output = data.map((item) => {
//   return item.anotherdata.final.map((innerItem) => {
//     return {
//       data: innerItem.data,
//       pincode: innerItem.pincode
//     };
//   });
// });

// console.log(output);
// const data = [
//   {
//     name: "vishal",
//     lastname: "sagar",
//     city: "kurali",
//     anotherdata: {
//       age: 24,
//       area: ["kurali", "mohali", "ropar"],
//       final: [
//         {
//           data: "area",
//           pincode: "140103"
//         }
//       ]
//     }
//   }
// ];

// // Print data and pincode using document.write()
// document.write("<h1>Data and Pincode</h1>");
// data.forEach((item, index) => {
//   document.write(`<p> Data: ${item.anotherdata.final[0].data}, Pincode: ${item.anotherdata.final[0].pincode}</p>`);
// });

// const resultdata = [
//   {
//     name: "shubham",
//     lastname: "shukla",
//     city: "jammu",
//     anotherdata: {
//       age: 24,
//       area: ["fazilka", "indore", "pakistan"],
//       final: [
//         {
//           data: "jgah",
//           pincode: "201203",
//           city: [
//             { name: "himachal", area: "jammu" },
//             { name: "una", area: "pathankot" },
//             { name: "ferozpur", area: "ropar" },
//             {
//               data: [
//                 { edu: "bca", result: "pass" },
//                 {
//                   edu: "bba",
//                   result: "good",
//                 },
//                 {
//                   edu: "btec",
//                   result: "excellent",
//                   areaTwo: ["fazilka", "indore", "pakistan"],
//                   performance: ["80%", "70%", "99%"],
//                   anotherresut: [
//                     { edu: "btec", result: "excellent" },
//                     {
//                       edu: "bcaaa",
//                       result: "pooor",
//                     },
//                     {
//                       edu: "arts",
//                       result: "great",
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   },
// ];
// const finalresult = resultdata.forEach((element) => {
//   document.write(
//     `${element.anotherdata.final[0].city[3].data[2].performance[1]} and ${element.anotherdata.final[0].city[3].data[2].anotherresut[1].result}`
//   );
// });

let myArr = [
  {
    studenName: "jack",
    studenClass: 6,
    studenSection: "a",
  },
  {
    studenName: "tom",
    studenClass: 6,
    studenSection: "a",
  },
];

// const newvalue = myArr.map(obj => `"${Object.keys(obj)[0]}":"${Object.values(obj)[0]}""${Object.keys(obj)[1]}":"${Object.values(obj)[1]}""${Object.keys(obj)[2]}":"${Object.values(obj)[2]}"`);
const newval = myArr.map((obj) => {
  console.log(
    `StudentName:"${obj.studenName}"studenClass:"${obj.studenClass}"studenSection:"${obj.studenSection}"`
  );
});
// const resultString = newvalue.join(', ');

// console.log(resultString);
const color = ["red", "gren", "blue"];
color[5] = "purple";
const necolors = color.map((val, index) => {
  console.log(`"${val}:${index}"`);
});
const newCars = ["AMG", "BMW", "AUDI"];
const latestCars = newCars.map((carele) => {
  return carele;
});
console.log(latestCars.toString());

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
cars[1] = "THAR";
const latCars = cars.map((carele) => {
  return carele;
});
console.log(latCars[1]);
const person = [
  { firstName: "Johns", lastName: "Doe", age: 46 },
  { firstName: "Johsdn", lastName: "Doe", age: 40 },
  { firstName: "Johsan", lastName: "Doe", age: 36 },
  { firstName: "Joshn", lastName: "Doe", age: 32 },
];
const newperson = person.filter((el) => {
  if (el.age <= 40) {
    return el;
  }
});
console.log(newperson);
const vishal = arr1[0].fruits[2][2];
console.log(vishal); // Output: vishal

const person1 = [
  { firstName: "Johns", lastName: "Doe", age: 46 },
  { firstName: "John1", lastName: "Doe", age: 40 },
  { firstName: "John2", lastName: "Doe", age: 36 },
  { firstName: "John3", lastName: "Doe", age: 32 },
];
const newperson1 = person
  .map((el) => {
    if (el.age <= 40) {
      return el.firstName;
    }
  })
  .filter((el) => !!el);
console.log(newperson1.length);

const newCar = ["AMG", "BMW", "AUDI"];
const latestCar = newCars.map((carele) => {
  return carele;
});
console.log(latestCars.toString());

const arr = ["vishal", "sagar", [true, false, "mohali "]];

console.log(arr[2][2]);

const arr1 = [
  {
    name: "ram",
    name: "sham",
    vehicles: ["cars", "bikes"],
    locations: [
      { city: "chandigarh" },
      { city: "mohali" },
    ],
    fruits: ["mango", "apple", ["jai ho ", "salmaan khan", "vishal"]],
  },
];

const vishal1 = arr1[0].fruits[2][2];
console.log(vishal1); 