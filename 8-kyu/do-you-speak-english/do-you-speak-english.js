function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}
​
console.log(spEng("Do you speak English?"));
console.log(spEng("I like eNglisH books."));
console.log(spEng("I speak French."));
console.log(spEng("abcnEglishsef"));