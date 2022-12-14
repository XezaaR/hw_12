// Task_1
function printHelloWithInput() {
    // Get the value of the input element
    const inputElement = document.getElementById("inputName");
    const inputValue = inputElement.value;

    //concatenation "Hello " with the input value
    const outputString = "Hello " + inputValue;
    alert(outputString);
}
//Task_2
function comparePasswords() {
    // Get the values of the two inputs password
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    // Compare the two passwords
    document.getElementById("result").innerHTML =
        password1 === password2 ? "Equal" : "Not equal";
}
// task_3
function printRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Print the random number
    alert(randomNumber);
}


