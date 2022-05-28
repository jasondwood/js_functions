//1. function that adds the same number to itself

function func1(first) {
  return first + first;
}

console.log(func1(4))

//2. squares a number then calls previous function that adds 3 to //itself

function func2(second) {
let functionAnswer = second * second
return functionAnswer + func1(3)
}
console.log(func2(5))


//3. calculate circumference of circle

function calculateCircumference(radius) {
return 2 * Math.PI * radius;
}
console.log(calculateCircumference(10))

//4. area of a circle

function calculateArea(radius) {
return Math.PI * radius * radius;
}
console.log(calculateArea(2))

//5. area of a square

function squareArea(side) {
return side * side;
}
console.log(squareArea(5))

//6. perimeter of square

function squarePerimeter(side) {
return side + side + side +side;
console.log(squarePerimeter())
}
squarePerimeter(9);

//7. pythagorean theorem ?? trying to calculate square root of a^2 + b^2 

function pythag(side1, side2) {
return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
console.log(pythag())
}
pythag(5, 5)

//8. convert celsius to fahrenheit
function cToFar(celsius) {
return celsius * 9/5 + 32;
console.log(cToFar());
}
cToFar(32)

//9. use previous function to convert back to celsius

function uselessFunction(temp) {
let celValue = cToFar(32);
return (celValue - 32) * 5/9;
console.log(cToFar)
}
uselessFunction()

/*  10. add squarePerimeter to squareArea and multiply it by a number for no real reason 
5 + 5 + 5 + 5 + 5 * 5 * parameter 
use parenthesis so order of operation doesn't get screwed up  */

function previousFunction(numbers) {
return (squarePerimeter(5) + squareArea(5)) * numbers;
console.log(previousFunction)
}
previousFunction(10)
