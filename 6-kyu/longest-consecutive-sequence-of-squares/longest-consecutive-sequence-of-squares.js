function longestSequence(n) {
    let longest = [];
    for (let start = 1; start*start <= n; start++) {
        let sum = 0;
        let current = start;
        let sequence = [];
        while (sum < n) {
            sequence.push(current);
            sum += current*current;
            current++;
        }
        if(sum === n && sequence.length > longest.length) {
            longest = sequence;
​
        }
    }
    return longest;
}
​
console.log(longestSequence(50)); 
​