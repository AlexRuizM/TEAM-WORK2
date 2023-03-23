/*const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};*/



const e3a3 = () => {
    const randomHexGenerator = () => {
        let colorGenerator = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + colorGenerator.slice(0, 6);
      };
      
      let hexCodes = [];
      for (let i = 0; i < 10; i++) {
        let codes = randomHexGenerator();
      hexCodes.push(codes);
      }
      console.log(hexCodes);
    
      let randomIndex = Math.floor(Math.random() * hexCodes.length);
      let randomCodeSelector = hexCodes[randomIndex];
      console.log(randomCodeSelector);
    
      console.log("%cHello World!", "color: " + randomCodeSelector);
}
