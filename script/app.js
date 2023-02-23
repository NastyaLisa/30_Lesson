function validateEmail(email) {
  if (email === "") {
    return false;
  }
  if (typeof email !== "string") {
    return false;
  }
  if (+email === 0) {
    return false;
  }
  if (email.length < 5) {
    return false;
  }
  const checkCharacters = email.split("");
  if (!checkCharacters.includes("@")
    || checkCharacters[0] === "@") {
    return false;
  }
  const atSymbol = email.indexOf("@");
  if (atSymbol === -1
    || email.indexOf("@", atSymbol + 1) !== -1) {
    return false;
  }
  const dotSymbol = email.indexOf(".");
  if (
    dotSymbol === -1 ||
    dotSymbol < atSymbol + 2 ||
    dotSymbol === email.length - 1
  ) {
    return false;
  }

  return true;
}
