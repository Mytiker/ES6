// let & const

console.log("LET & CONST");
let variable = "Test";
console.log(variable);
// ✅null

variable = "Another value";
console.log(variable);

const maxMarks = 100;
console.log(maxMarks);
// maxMarks = 99; // Won't work

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1, number2) {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1, number2) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log("Hello!");
};
greet();

const greetFriend = (friend) => console.log(friend);
greetFriend("Mytiker");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start = 10) => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name, ...args) {
  return args;
}
console.log(makeArray("Myt", 1, 2, 6));

//Destructuring

//Destructuring -Array

const myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);

const myHobby1 = myHobbies[0];
const myHobby2 = myHobbies[1];

console.log(myHobby1, myHobby2);

//ES6

// const [hobby1,hobby2] = myHobbies;
// console.log(hobby1,hobby2)

//Destructuring - Objects
const userData = { username: "Myt", age: 20 };
const myName = userData.username;
const age = userData.age;
console.log(myName, age);

//ES6

// const {username,age} = userData;
// console.log(username,age)

//Alias
// const {username:myName,age:myAge} = userData;

// console.log(myName,myAge);

//Template Literals

const myFriendName = "Mytiker";
const greeting =
  "Happy Birthday to Me" + myFriendName + ", Have a Great year ahead.";
console.log(greeting);

//ES6

// const greeting = `Happy birthday ${myFriendName}
// Have a great Life ahead, be cool as always
// `;
// console.log(greeting);

//Array helper methods in ES6

// forEach
// forEach accept a function iterator that loop through each item in an array

const array = [1, 2, 3, 4];
array.forEach((item) => console.log(item));

// so above code will print 1 2 3 4. You can also create a function and pass the reference into forEach, like this

const items = (item) => {
  console.log(item);
};
array.forEach(items);
// It will produce the same result which is 1 2 3 4.

// Map
// Map will loop through each item of array, same like forEach but Map returns the value of the array.

const arr = [
  { name: "Ocean", age: 18 },
  { name: "Mafia", age: 20 },
];
const person_names = arr.map((person) => person.name);

console.log(person_names);

// That will print
// ["Salman”,”Taj”]
// Easy? One of the biggest advantage to use Map over a old-school for loop is that you don’t hold temporary variable. Let’s do a reverse example for above code using for loop.

const arrayOfObjects = [
  { name: "Myt", age: 20 },
  { name: "Mytiker", age: 19 },
];
let temp = [];
for (let i = 0; i < arrayOfObjects.length; i++) {
  temp.push(arrayOfObjects[i].name);
}
console.log(temp);
// See? Map is no magic. Map significantly reduced the amount of code and avoided the use of variable holder.

// filter
// Filter return array based on the boolean of the comparison

const fruits = [
  { name: "Mango", color: "yellow" },
  { name: "watermelon", color: "Green" },
  { name: "orange", color: "orange" },
];
const filteredFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(filteredFruits);
// Above code will return [{name:”banana”,color:”yellow”}]. Filter is often use in filtering and sorting of a list.

// find
// find will return the record if a particular element is found in the array.

let x = [
  { name: "Jockey", age: 31 },
  { name: "Varun", age: 40 },
];
x.find((obj) => obj.name === "jay");
// x will return {name"jay",age:1}

// reduce
// reduce is the most flexible helper, we can probably reimplement all the other helpers by just using reduce. Since reduce is the most complicated one, let’s do a classic normal for loop first.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// The sum will print 15. Let’s do it in one line using reduce.
// numbers.reduce((sum, numbers) => sum + numbers, 0)
// reduce takes two arguments, the first argument is the iterator function, which in above case sum is the accumulator and numbers is an array, the second argument is the initial value, for our case we want it to be zero.
