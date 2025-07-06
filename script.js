//Fetching the id from the html element
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const displayDiv = document.querySelector(".display-div");

//Function to convert numbers to Numrals
const numberToNumeral = (int) => {
  const arabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";
  let i = 0;
  while (int > 0) {
    const div = Math.floor(int / arabics[i]);
    int -= div * arabics[i];
    result += symbols[i].repeat(div);
    i++;
  }
  return result;

}

//Function to check and validate that user input is a number
const checkInput = ()=>{
  const userInput = parseInt(numberInput.value);

  if (!userInput) {
    output.innerText = "Please enter a valid number";
    displayDiv.style.borderColor = "red";
    displayDiv.style.color = "red";
    return;
  }else if (userInput < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    displayDiv.style.borderColor = "red";
    displayDiv.style.color = "red";
    return;
  }else if (userInput > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    displayDiv.style.borderColor = "red";
    displayDiv.style.color = "red";
    return;
  }else{
    displayDiv.style.borderColor = "white";
    displayDiv.style.color = "white";
    output.textContent = numberToNumeral(userInput);
  }
}

convertBtn.addEventListener("click", checkInput);

convertBtn.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    checkInput();
  }
});