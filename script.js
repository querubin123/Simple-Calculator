const allButtons = document.querySelectorAll("button");
const inputNum = document.querySelector("#input-section");

allButtons.forEach((button) => {
  button.onclick = () => {
    if (button.id == "C") {
      inputNum.innerText = "";
    } else if (button.id == "delete") {
      let string = inputNum.innerText.toString();
      inputNum.innerText = string.substr(0, string.length - 1);
    } else if (inputNum.innerText != "" && button.id == "equals") {
      inputNum.innerText = eval(inputNum.innerText);
    } else if (inputNum.innerText == "" && button.id == "equals") {
      inputNum.innerText = "Null";
      setTimeout(() => (inputNum.innerText = ""), 2000);
    } else {
      inputNum.innerText += button.id;
    }
  };
});
