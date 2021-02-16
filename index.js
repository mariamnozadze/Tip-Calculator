function calculateTip() {
  //inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  //validation
  if (billAmount === "" || serviceQuality == 0) {
    return window.alert("Please enter some value to use the calculator.");
  }

  // Check to see if input is empty or less than 1
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Do the Math for the Tip
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2); //round to two decimal

  //display the Tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click the button to calculate
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
