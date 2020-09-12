// edit the TipCalculator function so it has two
// parameters, mealCost and tipPercent
// instead of the hard coded 20% (0.2)
let mealCost;
let tipPercent;
function tipCalculator(mealCost, tipPercent) {
  return mealCost * tipPercent;
}

let tipInput = document.querySelector("#tipAmount");
let tipPercent = tipInput;
// get the user input out of the 1st text box
// give a variable name to the 1st text box
let userInput = document.querySelector("#mealAmount");
let mealCost = userInput;
// pay attention to changes in userInput
userInput.addEventListener("change", function(tips) {

  console.log(userInput.value);
  // run the tipCalculator function
  // using the number the user entered for the meal
  let newTip = tipCalculator(userInput.value);
  // show that tip in the 2nd text box
  tipInput.value = newTip;
  var output = "";
  for (const entry of newTip) {
    output = output + entry[0] + "=" + entry[4] + "\r";
  };

  tips.innerText = output;
  event.preventDefault();
},false);


