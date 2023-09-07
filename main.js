//Exercise one
console.log("Hello World!");

//Exercise two
const myName = "Topacio";
console.log(myName);

//Exercise three
const rectangle = {
  length: 7,
  width: 4,
}
const area = rectangle.length * rectangle.width;
console.log(area);

//Exercise four and five
for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

//Exercise six
const userName = prompt(
  "What is your name?");
console.log(`Hello ${userName}!`);

//Exercise seven
const number = parseInt(prompt("Please enter a number"));

if (number < 0) {
  console.log("Please enter a positive integar");
} else if (number === 0) {
  console.log(`1 is the factorial of ${number}`);
} else {
  let fact = 1;
  for(let i = 1; i <= number; i++) {
  fact *= i;
} console.log(`${fact} is the factorial of ${number}.`);
}

//Exercise eight
const leapYear = prompt("Please put in a year:");

if (leapYear % 400 == 0) {
  console.log(`${leapYear} is a leap year.`);
 } else if (leapYear % 100 == 0) {
  console.log(`${leapYear} is not a leap year`);
} else if (leapYear % 4 == 0) {
   console.log(`${leapYear} is a leap year`); 
  } else {
    console.log(`${leapYear} is not a leap year`);
  }

  //Exercise nine
  let x = 1;
  let sumAll = 0;

  while (x <= 100) {
    sumAll += x;
    x++;
  }
  console.log(`The sum of all numbers from 1 to 100 is ${sumAll}`);


  //Exercise ten
  const num1 = parseInt(prompt("Enter a number: "));
  const num2 = parseInt(prompt("Enter another number: "));
  /* This was my first solution to the exercise

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;

  console.log(`In addition ${num1} and ${num2} is ${addition}\nIn subtraction ${num1} and ${num2} is ${subtraction}\nIn multiplication ${num1} and ${num2} is ${multiplication}\nIn division ${num1} and ${num2} is ${division}`);
  */
  // I then wondered if an object data type would also work and it did 
  const result = {
    add : num1 + num2,
    subt : num1 - num2,
    mult : num1 * num2,
    div : num1 / num2
  };

  console.log(`In addition ${num1} and ${num2} is ${result.add}\nIn subtraction ${num1} and ${num2} is ${result.subt}\nIn multiplication ${num1} and ${num2} is ${result.mult}\nIn division ${num1} and ${num2} is ${result.div}`);

  //Exercise eleven

  const strings = "Hello"; //typeof string
  const numbers = 7; //typeof number
  const booleans = 4 > 2 ; //typeof boolean
  const nullValue = null;
  let undefineds; //typeof undefined
  const colors = {
    shirt: "purple",
    cat: "black",
    bird: "white"
  }; /* {shirt: 'purple', cat: 'black', bird: 'white'} typeof object */
  const arr = ["cats", "dogs", "birds"]; /*
  ['cats', 'dogs', 'birds'] typeof array*/
 let noDefaultValueDeclaration;