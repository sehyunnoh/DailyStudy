// Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
    for (var i = 0; i < inputString.length; i++) {
      var tmp = inputString[i];
      if (tmp != " " && (tmp == 0 || parseInt(tmp))) {
        return tmp;
      }
    }
  }

  console.log(firstDigit("var_1__Int"));