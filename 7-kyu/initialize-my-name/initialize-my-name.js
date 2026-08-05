function initializeNames(name){
    // Insert your brilliant code here
    
    let arrName = name.split(" ");
    for (let i = 1; i < arrName.length - 1; i++) {
        arrName[i] = arrName[i][0] + ".";
    }
​
    return arrName.join(" ");
    
}
​
​
console.log(initializeNames('Dimitri')); 
console.log(initializeNames('Jack Ryan')); 
console.log(initializeNames('Lois Mary Lane')); 
console.log(initializeNames('Alice Betty Catherine Davis')); 
​