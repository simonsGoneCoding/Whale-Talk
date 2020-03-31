const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
let whaleMessage = "";

for (let i = 0; i < input.length; i++) {
  //   console.log(input[i]);
  vowels.forEach(item => {
    // Whales double their e‘s and the u‘s in their language.
    if (item === input[i]) {
      switch (item) {
        case "e":
          return resultArray.push(item);
          break;

        case "u":
          return resultArray.push(item, item);
          break;

        case "i":
          return resultArray.push(item);
          break;

        case "a":
          return resultArray.push(item);
          break;

        case "o":
          return resultArray.push(item);
          break;
      }
    }
  });
  whaleMessage = resultArray.join("").toUpperCase();
}

whaleMessage;
