// denna funktion tar emot en array av strängar. gör så att den returnerar en enda sträng som sammanfogar alla strängar i arrayen

export function combineStrings(strings) {
  let result = "";
  strings.forEach((string) => {
    result += string;
  });

  return result;
}

console.log(combineStrings(["Hej", "jag", "heter", "Sara"]));