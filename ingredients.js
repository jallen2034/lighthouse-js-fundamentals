// array of ingredients 
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("While loop that prints out the contents of ingredients: \n");

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("\n");

console.log("For loop that prints out the contents of ingredients: \n");

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n");

console.log("For loop that prints out the contents of ingredients backwards: \n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}