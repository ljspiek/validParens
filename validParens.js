function validParens(parens) {
  let output = false;
  let open = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ")" && !open) {
      output = false;
      break;
    } else if (parens[i] === "(") {
      open++;
    } else if (parens[i] === ")" && open !== 0) {
      open--;
      output = true;
    }
  }
  return output;
}

console.log(validParens(")()"));
