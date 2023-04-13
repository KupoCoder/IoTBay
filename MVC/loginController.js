const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");

const hardcodedUsername = "user";
const hardcodedPassword = "password";

loginBtn.addEventListener("click", () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === hardcodedUsername && enteredPassword === hardcodedPassword) {
        errorMessage.style.display = "none";
        alert("Login successful!");
    } else {
        errorMessage.style.display = "block";
    }
});
