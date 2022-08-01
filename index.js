// Example
// src/index.js

class ShoppingDataType {
  constructor() {
    this.shoppingList = ["oranges", "onions", "banana"];
  }

  getShoppingList() {
    return this.shoppingList.join(",");
  }

  addItem(item) {
    return this.shoppingList.push(item);
  }
}

export default ShoppingDataType;

// From main.js
import shoppingDataType from "./src/index";

const shopping = new shoppingDataType();
console.log(shopping.getShoppingList());

