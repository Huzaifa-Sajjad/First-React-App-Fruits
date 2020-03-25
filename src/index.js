import { pickFruit, removeItems } from "./helper";
import FRUITS from "./fruits";

const fruit = pickFruit();

console.log("I would like to eat a fruit.");
console.log("Here you go sir: ", fruit);
console.log("Yummm! I would like to have one more");
let result = removeItems(FRUITS, fruit);
if (result !== undefined) {
  console.log("Here you go sir: ", result);
} else {
  console.log("Sorry We are out of ", result);
}
