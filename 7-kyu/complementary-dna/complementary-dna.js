function dnaStrand(dna){
  let arr = dna.split("");
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 'A'){
      result.push('T');
    }
    if(arr[i] === 'T'){
      result.push('A');
    }
    if(arr[i] === 'C'){
      result.push('G');
    }
    if(arr[i] === 'G'){
      result.push('C');
    } 
  }
  return result.join("");
}
  
​
  
  console.log(dnaStrand("AAAA"));
  console.log(dnaStrand("ATTGC"));
  console.log(dnaStrand("GTAT"));
  
  