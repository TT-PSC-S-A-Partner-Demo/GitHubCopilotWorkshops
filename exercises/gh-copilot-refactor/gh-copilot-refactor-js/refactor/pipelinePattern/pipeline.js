function processDocument(doc) {
  doc = doc.toLowerCase();
  doc = doc.replace(/[,!.?]/g, "");

  let words = doc.split(" ");
  words = words.map((word) => {
    if (word.startsWith("a")) {
      return word.toUpperCase();
    }

    return word;
  });

  return words.join(" ");
}

const doc = "Hello, World! Are apples amazing?";
console.log(processDocument(doc));
