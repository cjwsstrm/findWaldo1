function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback  adding the argument i here makes the callback function take the value
    }             //found in the loop.
  }
}

function actionWhenFound(i) {               
    console.log("Found him at " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// arr.indexOf(searchElement[, fromIndex])
