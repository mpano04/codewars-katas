function twoSort(s) {
    let word = s[0]
    
    for (let i = 1; i < s.length; i++){
      if(s[i] < word){
        word = s[i]
      }
    }
      return word.split('').join('***')
    }

   console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));