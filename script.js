const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","+","-","="];
let output = "";


const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "Del") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }
    input.value = output;
};


// Add event listener to buttons, call calculate() on click
buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        calculate(e.target.dataset.value);
    });
});

