function wordsToMarks(string){
  //your code here
  
  let alphabets = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"
];
  
  let newStr = string.split("");
  
  let sum =0;
  for (let i = 0; i<newStr.length; i++){
    for(let j=0; j<alphabets.length; j++){
      if (newStr[i] === alphabets[j]){
        sum += (j + 1)
      }
    }
  }
  
  return sum;
}
​
​
console.log(wordsToMarks("attitude"));