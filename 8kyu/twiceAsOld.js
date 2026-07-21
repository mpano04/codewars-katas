/* 
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

const twiceAsOld = (dadYearsOld, sonYearsOld) => {

    /*
    let doublingSonYears = sonYearsOld * 2;
    let result = doublingSonYears - dadYearsOld;
    
    if(result === 0){
      return 0;
    }
    else if (result<0){
      return -result;
    }
    else {
      return result;
    }
    */

    return Math.abs((sonYearsOld * 2) - dadYearsOld);
    
  }
  
  console.log(twiceAsOld(60,23));