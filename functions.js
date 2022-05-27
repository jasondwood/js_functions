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
console.log(squareArea(2))

//6. perimeter of square

function squarePerimeter(side) {
  return side + side + side +side;
}
console.log(squarePerimeter(3))

//7. pythagorean ??

function pythag(side1, side2){
	return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
}
console.log(pythag(3, 2))
