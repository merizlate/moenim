// Define a type alias for string to enhance code readability and maintainability
type StrType = string;

// Function to demonstrate the use of StrType
function greet(name: StrType): string {
  // Return a greeting message
  return `Hello, ${name}!`;
}

// Example usage of the greet function
const message: string = greet('Alice');
console.log(message); // Output: Hello, Alice!
