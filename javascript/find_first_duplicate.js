function findFirstDuplicate(arr) {
  // type your code here
  const uniques = new Set()
  for (const value of arr) {
    if (uniques.has(value)) {
      return value
    } 
    uniques.add(value)
  }

  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
I needed some help with this one. I was able to get to the point where I could get 
5 out of 6 tests passing using a for loop

I iterated through the array and checked if array at index i was equal to 
array at index i+1. If no matches return -1

This worked for the majority but if the duplicate was not immediately after the
current value it would not find the match

looking at the solution I learned of the set() method and how to use this which is helpful


*/
