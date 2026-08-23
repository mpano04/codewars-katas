​
        let temp = oddNumbers[i];
        oddNumbers[i] = oddNumbers[j];
        oddNumbers[j] = temp;
      }
    }
  }
​
  // put the sorted odd numbers back
  let oddIndex = 0;
​
  for (let i = 0; i < array.length; i++) {
​
    if (array[i] % 2 !== 0) {
      array[i] = oddNumbers[oddIndex];
      oddIndex++;
    }
​
  }
​
  return array;
}
​
console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([7, 1]));