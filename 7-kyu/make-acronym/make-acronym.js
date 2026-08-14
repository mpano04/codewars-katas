function toAcronym(inp){
  // ...
  
  let arr = inp.split(" ");
  let result = [];
  for(let i=0; i<arr.length; i++){
    result.push(arr[i][0].toUpperCase());
  }
  
  return result.join("");
}
​
console.log(toAcronym("Code Wars"));
console.log(toAcronym("Water Closet"));
console.log(toAcronym("Portable Network Graphics"));
console.log(toAcronym("PHP: Hypertext Preprocessor"));
console.log(toAcronym("hyper text markup language"));