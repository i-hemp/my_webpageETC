function verify() {
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;
  if (
    userName !== null &&
    userName !== "h" &&
    passWord !== null &&
    passWord !== "1"
  ) {
    window.location.href = "logged_out.html";
  } else {
    window.location.href = "logged_in.html";
  }
}

// var user = document.getElementById("username");
// user.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     // event.preventDefault();
//     document.getElementById("password").focus();
//   }
// });
// var pass = document.getElementById("password");
// user.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       event.preventDefault();

//     document.getElementById("submit-btn").click();
//   }
// });
