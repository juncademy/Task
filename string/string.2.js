function analyzeCharacters(text) {
  let result = [];

  for (let i = 0; i < text.length; i++) {
    result.push({
      char: text.charAt(i),
      position: i
    });
  }

  return result;
}
let output = analyzeCharacters("Hi");

console.log(output);

// Belum selesai