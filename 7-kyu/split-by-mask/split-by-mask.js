function split(string, mask) {
  
  if (string === "" && mask.length === 0) {
    return [];
}
​
    let total = 0;
​
    for (let i = 0; i < mask.length; i++) {
        total += mask[i];
    }
​
    if (total !== string.length) {
        return null;
    }
​
    let positions = [];
    let sum = 0;
​
    for (let i = 0; i < mask.length; i++) {
        sum += mask[i];
        positions.push(sum);
    }
​
    let spacedString = "";