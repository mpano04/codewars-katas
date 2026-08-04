function countDirectionChanges(readings) {
    let changes = 0;
    let direction = "";
​
    for (let i = 1; i < readings.length; i++) {
​
        if (readings[i] === readings[i - 1]) {
            continue;
        }
​
        let currentDirection = "";
​
        if (readings[i] > readings[i - 1]) {
            currentDirection = "increasing";
        } else {
            currentDirection = "decreasing";
        }
​
        if (direction === "") {
            direction = currentDirection;
        }
​
        else if (direction !== currentDirection) {
            changes++;
            direction = currentDirection;
        }
    }
​
    return changes;
}
​
console.log(countDirectionChanges([1, 1, 3, 3, 2]));