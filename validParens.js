function validParens(parens) {
  let output = true;
  let open = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === ")" && !open) {
      output = false;
      break;
    } else if (parens[i] === "(") {
      open++;
    } else if (parens[i] === ")" && open > 0) {
      open--;
      output = true;
    }
  }
  if (open === 0) {
    return output;
  } else return false;
}

console.log(validParens("()()(())()()(("));
