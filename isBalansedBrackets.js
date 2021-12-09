function isBalansed(str) {
  if (str === null || str.length % 2 === 1) {
    return false;
  } else {
    while (str.includes("()") || str.includes("{}") || str.includes("[]")) {
      str = str.replaceAll("()", "").replaceAll("{}", "").replaceAll("[]", "");
    }
    return str.length === 0;
  }
}
console.log(isBalansed("{[()]}"));
console.log(isBalansed("{[([])}"))
