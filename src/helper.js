import fruits from "./fruits";

function pickFruit() {
  return fruits[Math.floor(Math.random() * (fruits.length - 1 + 1) + 1)];
}

function removeItems(items, item) {
  if (items[item]) {
    items.forEach(element => {
      if (element === item) {
        items.remove(item);
        return item;
      }
    });
  } else {
    return undefined;
  }
}

export { pickFruit, removeItems };
