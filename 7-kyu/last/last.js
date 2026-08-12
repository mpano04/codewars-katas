function last(...args) {
  if (args.length === 1 && (Array.isArray(args[0]) || typeof args[0] === "string")) {
    return args[0][args[0].length - 1];
  } else if (args.length === 1) {
    return args[0];
  } else {
    return args[args.length - 1];
  }
}
​
​
console.log(last(2, "i", "bd"));
console.log(last([1, 2, 3, 4]));
console.log(last("xyz"));
console.log(last(1, 2, 3, 4));
console.log(last([1, 2], [3, 4]));