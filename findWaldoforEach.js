function findWaldo(arr, found) {
  arr.forEach(function(i, index) {
    if (arr[index] === "Waldo") {
      found(index);   // execute callback
   }
  })
}
function actionWhenFound(index) {
    console.log("Found him at " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// arr.indexOf(searchElement[, fromIndex])



// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {