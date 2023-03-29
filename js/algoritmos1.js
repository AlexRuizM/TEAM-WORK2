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

}


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

