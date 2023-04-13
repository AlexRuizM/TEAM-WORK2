/*const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};*/

const e1a1 = () => {
  let month = new Date(Date.now()).toLocaleString("en", { month: "long" });
  console.log(month);

  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(`${month} has 31 days`);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(`${month} has 30 days`);
      break;
    default:
      console.log("February has 28 days");
      break;
  }
};

const e4a1 = () => {
  let isGreen = false;

  setInterval(() => {
    isGreen = !isGreen;
    if (isGreen) {
      console.log("It's green");
      console.log("Cross the road");
    } else {
      console.log("It's red");
      console.log("Please wait");
    }
  }, 2000);
};

const e9a1 = () => {
  let document = prompt("Introduzca su DNI/NIE");
  let expresionRegularNie = /^[XT]\d{7}[A-Z]$/;
  let expresionRegularDni = /^\d{8}[A-Z]$/;

  if (expresionRegularDni.test(document)) {
    console.log("El DNI es válido");
  } else if (expresionRegularNie.test(document)) {
    console.log("El NIE es válido");
  } else {
    console.log("introduzca un DNI/NIE válido");
  }
};

const e6a1 = () => {
  let email = "tolkien@lordofrings.com";
  let password = "aNBR6ZeWPY";
  let userEmail = prompt("Write here your email: ");
  let userPassword = prompt("Write your password: ");

  if (userEmail == email && userPassword == password) {
    console.log("Welcome Mr.Tolkien");
  } else {
    console.log("Wrong password or email");
  }
};
