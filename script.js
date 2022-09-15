var ifConnected = window.navigator.onLine;
if (ifConnected) {
  document.getElementById(
    "checkOnline"
  ).innerHTML = `<i class="fas fa-wifi"></i>  You're connected to the internet`;
  document.getElementById("checkOnline").style.color = "green";
  document.getElementById("checkOnline").style.border = "1px solid green";
} else {
  document.getElementById(
    "checkOnline"
  ).innerHTML = `<i class="fas fa-wifi"></i>  You're not connected to the internet`;
  document.getElementById("checkOnline").style.color = "red";
  document.getElementById("checkOnline").style.border = "1px solid red";
}
setInterval(function () {
  var ifConnected = window.navigator.onLine;
  if (ifConnected) {
    document.getElementById(
      "checkOnline"
    ).innerHTML = `<i class="fas fa-wifi"></i>  You're connected to the internet`;
    document.getElementById("checkOnline").style.color = "green";
    document.getElementById("checkOnline").style.border = "1px solid green";
  } else {
    document.getElementById(
      "checkOnline"
    ).innerHTML = `<i class="fas fa-wifi"></i>  You're not connected to the internet`;
    document.getElementById("checkOnline").style.color = "red";
    document.getElementById("checkOnline").style.border = "1px solid red";
  }
}, 3000);
