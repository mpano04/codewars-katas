    chars[i] = unique[i];
  }
​
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = 0; j < chars.length - 1 - i; j++) {
      if (chars[j] > chars[j + 1]) {
        let temp = chars[j];
        chars[j] = chars[j + 1];
        chars[j + 1] = temp;
      }
    }
  }
​
  // 4. Convert back to a string
  let result = "";
​
  for (let i = 0; i < chars.length; i++) {
    result += chars[i];
  }
​
  return result;
}
​
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));