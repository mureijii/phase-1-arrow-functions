// Function expression: Dividing 2000 by 100
const divide = function() {
    return 2000 / 100;
  };
  console.log(divide()); // Output: 20
  
  // Arrow function: Dividing 2000 by 100
  const divideArrow = () => 2000 / 100;
  console.log(divideArrow()); // Output: 20
  
  // Function expression: Adding two numbers
  const add = function(a, b) {
    return a + b;
  };
  console.log(add(3, 4)); // Output: 7
  
  // Arrow function: Adding two numbers
  const addArrow = (a, b) => a + b;
  console.log(addArrow(3, 4)); // Output: 7
  
  // Function expression: Squaring a number
  const square = function(x) {
    return x * x;
  };
  console.log(square(5)); // Output: 25
  
  // Arrow function: Squaring a number (Single parameter, no parentheses needed)
  const squareArrow = x => x * x;
  console.log(squareArrow(5)); // Output: 25
  
  // Function expression: Printing a message
  const greet = function(name) {
    return `Hello, ${name}!`;
  };
  console.log(greet("Alice")); // Output: Hello, Alice!
  
  // Arrow function: Printing a message
  const greetArrow = name => `Hello, ${name}!`;
  console.log(greetArrow("Alice")); // Output: Hello, Alice!`
  
  // Function expression: Checking if a number is even
  const isEven = function(num) {
    return num % 2 === 0;
  };
  console.log(isEven(4)); // Output: true
  
  // Arrow function: Checking if a number is even
  const isEvenArrow = num => num % 2 === 0;
  console.log(isEvenArrow(4)); // Output: true
  
  // Function expression: Using map to double numbers
  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubledNumbers); // Output: [2, 4, 6, 8]
  
  // Arrow function: Using map to double numbers
  const doubledNumbersArrow = numbers.map(num => num * 2);
  console.log(doubledNumbersArrow); // Output: [2, 4, 6, 8]
  
  // Function expression: Returning an object
  const createUser = function(name, age) {
    return { name: name, age: age };
  };
  console.log(createUser("John", 25)); // Output: { name: 'John', age: 25 }
  
  // Arrow function: Returning an object (Wrap with parentheses)
  const createUserArrow = (name, age) => ({ name, age });
  console.log(createUserArrow("John", 25)); // Output: { name: 'John', age: 25 }
  