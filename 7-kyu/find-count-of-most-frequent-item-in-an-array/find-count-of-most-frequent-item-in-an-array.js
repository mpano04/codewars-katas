const mostFrequentItemCount = (collection) => {
    if (collection.length === 0) {
      return 0;
    }
  
    let maxCount = 0;
    let mostfrequent;
  
    for (let i = 0; i < collection.length; i++) {
      let count = 1; // Count the current element
  
      for (let j = i + 1; j < collection.length; j++) {
        if (collection[i] === collection[j]) {
          count++;
        }
      }
  
      if (count > maxCount) {
        maxCount = count;
        mostfrequent = collection[i];
      }
    }
  
    return maxCount;
}
​
  console.log(mostFrequentItemCount([3, -1, -1]));