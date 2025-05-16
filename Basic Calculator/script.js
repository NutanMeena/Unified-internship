let display = document.getElementById("inputBox"); // to access display
let buttons = document.querySelectorAll("button"); // to access all buttons

let buttonsArray = Array.from(buttons); // convert nodeList to array
let string = ""; // global variable to display result

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let btnText = event.target.innerText;

        if (btnText === "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else if (btnText === "AC") {
            string = "";
            display.value = string;
        } else if (btnText === "%") {
            string = eval(string) / 100;
            display.value = string;
        } else if (btnText === "=") {
            try {
                string = eval(string);
                display.value = string;
            } catch (error) {
                display.value = "Error";
            }
        } else if (btnText === "x²") {
            try {
                string = Math.pow(eval(string), 2).toString();
                display.value = string;
            } catch {
                display.value = "Error";
            }
        } else if (btnText === "√") {
            try {
                string = Math.sqrt(eval(string)).toString();
                display.value = string;
            } catch {
                display.value = "Error";
            }
        } else if (btnText === "+/-") {
            try {
                string = (-1 * eval(string)).toString();
                display.value = string;
            } catch {
                display.value = "Error";
            }
        } else {
            string += btnText;
            display.value = string;
        }
    });
});