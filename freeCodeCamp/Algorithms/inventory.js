function updateInventory(arr1, arr2) {
  const map = new Map();

  arr1.forEach(el => {
    if (!map.get(el[1])) {
      map.set(el[1], el[0]);
    } else {
      map.set(el[1], map.get(el[1]) + el[0]);
    }
  });

  arr2.forEach(el => {
    if (!map.get(el[1])) {
      map.set(el[1], el[0]);
    } else {
      map.set(el[1], map.get(el[1]) + el[0]);
    }
  });

  const updatedInventory = [];
  for (let item of map) {
    updatedInventory.push(item);
  }

  updatedInventory.sort();
  const result = updatedInventory.map(el => el.reverse());

  console.log(result);
  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

// Create map
// loop both arr
// Add the title as key if !exist
// add value to key
// update inventory.
