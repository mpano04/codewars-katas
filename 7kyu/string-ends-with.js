// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false


function solution(str, ending){
    
      let start = str.length - ending.length;
      let result = "";
  
      for (let i = start; i < str.length; i++) {
          result += str[i];
      }
  
      if (result === ending) {
          return true;
      } else {
          return false;
      }
  }
  
  console.log(solution("abc", "bc"));      
  console.log(solution("abc", "d"));      
  console.log(solution("football", "ball"));
  console.log(solution("hello", "lo"));    
  console.log(solution("hello", "world"));