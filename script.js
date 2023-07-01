const users = [
  {
    username: "Shivam",
    password: "1234",
  },
  {
    username: "Krishna",
    password: "1234",
  },
  {
    username: "Tarun",
    password: "1234",
  },
  {
    username: "Abhishek",
    password: "1234",
  },
  {
    username: "Mohit",
    password: "1234",
  },
];

const showData = [
  {
    name: "Shivam",
    data: "You are success",
  },
  {
    name: "Tarun",
    data: "Thank You All Of You",
  },
];

function finder() {
  let id = document.getElementById("userId").value;
  let pass = document.getElementById("password").value;
  for (let i = 0; i < users.length; i++) {
    let user = users[i].username;
    let key = users[i].password;
    if (user === id && key === pass) {
      return true;
    }
  }
  return false;
}

function signIn() {
  if (finder() === true) {
    console.log(showData);
  } else {
    alert("Please Try Again");
  }
}
