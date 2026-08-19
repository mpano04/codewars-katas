function rotations(dieArray) {
  // If the array is empty, we need 0 rotations
  if (!dieArray || dieArray.length === 0) {
    return 0;
  }
​
  // We start our minimum with Infinity so any number beats it
  let minRotations = Infinity;
​
  // Loop through all 6 possible target faces (1 through 6)
  for (let target = 1; target <= 6; target++) {
    let currentTotal = 0;
    const opposite = 7 - target;
​
    // Check every die in dieArray against the current target
    for (let i = 0; i < dieArray.length; i++) {
      const die = dieArray[i];
​
      if (die === target) {
        currentTotal += 0; // Already facing up
      } else if (die === opposite) {
        currentTotal += 2; // Opposite side needs 2 flips
      } else {
        currentTotal += 1; // Adjacent side needs 1 flip
      }
    }
​
    // Update the smallest rotation count found so far
    if (currentTotal < minRotations) {
      minRotations = currentTotal;
    }
  }
​
  // Return the final lowest score
  return minRotations;
}