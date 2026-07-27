function toCamelCase(str){
  
    let newStr = "";
    let strCamel = "";
    for(let i=0; i<str.length; i++){
        if(str[i-1] === "-" || str[i-1] === "_"){
           
            newStr +=  str[i].toUpperCase();
        }
        else{
            newStr += str[i];
        }   
    }
    
    for(let i=0; i<newStr.length; i++){
        if(newStr[i] !== "-" && newStr[i] !== "_"){
            strCamel += newStr[i];
        }      
    }
    return strCamel;
  
  }
  
  console.log(toCamelCase("the_stealth_warrior"));
  console.log(toCamelCase("The-Stealth-Warrior"));