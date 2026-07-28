const removeSmallest = (numbers) => {
​
    if(numbers.length === 0){
        return [];
    }
​
    let smallest = numbers[0];
​
    for(let i = 1; i < numbers.length; i++){
​
        if(numbers[i] < smallest){
            smallest = numbers[i];
        }
​
    }
​
    let smallestIndex = numbers.indexOf(smallest);
​
    let result = [];
​
    for(let i = 0; i < numbers.length; i++){
​
        if(i !== smallestIndex){
            result.push(numbers[i]);
        }
​
    }
​
    return result;
}
​
​
console.log(removeSmallest([1,2,3,4,5]));
console.log(removeSmallest([5,3,2,1,4]));
console.log(removeSmallest([2,2,1,2,1]));