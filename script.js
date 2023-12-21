
    const input = document.getElementById("num");
    const operatorButtons = document.querySelectorAll(".operator");
    const numberButtons = document.querySelectorAll(".buttons button:not(.operator)");
    const specialChars = ["%", "*", "/", "+", "-", "="];
    let output = "";
  
    const calculate = (btnValue) => {
      if (btnValue === "=" && btnValue !== "") {
        // Perform percentage calculation if the operator is "%"
        if (output.includes("%")) {
          output = eval(output.replace("%", "/100"));
        } else {
          output = eval(output);
        }
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
  
    // Add event listener to operator buttons, call calculate() on click
    operatorButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        calculate(e.target.dataset.value);
      });
    });
  
    // Add event listener to number buttons, append value to output on click
    numberButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        const btnValue = e.target.dataset.value;
        output += btnValue;
        input.value = output;
      });
    });


