const e1a1 = () => {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let actualDate = new Date();
  let actualMonth = month[actualDate.getMonth()];
  console.log(`Currently month is ${actualMonth}`);

  let month31days = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ];
  let month30days = ["April", "June", "September", "November"];

  if (month31days.includes(actualMonth)) {
    console.log(`${actualMonth} has 31 days`);
  } else if (month30days.includes(actualMonth)) {
    console.log(`${actualMonth} has 30 days`);
  } else if (actualMonth == "February") {
    console.log(`${actualMonth} has 28 days`);
  } else {
    console.log("error");
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

