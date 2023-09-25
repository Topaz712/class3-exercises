//exercise one
//Write a JavaScript program that displays "Hello, World!" on the console.

function greeting(text: string) {
  console.log(text);
}
greeting("Hello World");


//exercise two 
//Declare a variable named name and assign it your name as a string. Display the value of the name variable on the console.

let aName: string;
aName = 'Topaz';
console.log(aName);


//exercise three
//Write a JavaScript program that calculates and displays the area of a rectangle. Use variables length and width to store the dimensions of the rectangle.

function calcRectangle(length: number, width: number): number {
  return length * width;
}

const lengths: number = 5;
const width: number = 3;

const rectangleArea = calcRectangle(lengths, width);
console.log(rectangleArea);


//exercise four and five 
//Write a JavaScript program that checks if a number is even or odd. Display a message on the console indicating whether the number is even or odd.
for(let num: number = 1; num <= 10; num++) {
  const message: string = num % 2 === 0 ?`${num} is even` : `${num} is odd`;
  console.log(message);
}
