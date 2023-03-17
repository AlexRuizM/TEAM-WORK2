/*const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};*/

const e1a2 = () => {
  let word = "palindrome";
  console.log(Array.from(word));
};

const e5a2 = () => {
  const all = () => {
    console.log("Welcome to text statistics program");
    let phrase = prompt("Write here your sentence")
    
    let completeLength = phrase.length;
    console.log(`Length: ${completeLength} characters`);
    
    let noSpaces = phrase.replace(/\s/g);

    let words = "";
    let unWords = "";
    let shortest = "";
    let longest = "";
  };

  all();
};

e5a2();
