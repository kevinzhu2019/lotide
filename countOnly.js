const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      results[key] = 0;
    }
  }
  // console.log(results);
  for (const j in results) {
    for (const item of allItems) {
      // console.log(item);
      if (item === j) {
        results[j] += 1;
      }
    }
  }
  return results;
  // console.log(results);
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, 
                                        "Karima": true, 
                                        "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);