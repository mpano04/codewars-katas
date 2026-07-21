function sumArray(array) {
    if (array == null || array.length <= 2) {
        return 0
      }
  
    let small = array[0];
    let big = array[0];  
    let sum = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < small) {
        small = array[i];
      }
      if (array[i] > big) {
        big = array[i];
      }
    }
  
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
  
    return sum - big - small;
  }
  
  console.log(sumArray([1,2,3,4,5,6]));