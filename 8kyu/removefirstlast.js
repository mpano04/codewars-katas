function removeChar(str){
    //You got this!
     let result = " ";
     for (let i=1; i<str.length-1; i++){
       result += str[i]
     }
     return result;
     
   };
   console.log(removeChar('eloquent')); 
   console.log(removeChar('country'));
   console.log(removeChar('son'));
   console.log(removeChar('be'));