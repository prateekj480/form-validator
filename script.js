const username = document.getElementById("username");
const usernameErr = document.getElementById("error-username");
const emailId = document.getElementById("mail");
const emailErr = document.getElementById("error-email")
const passWord = document.getElementById("pass");
const passWordErr = document.getElementById("error-password");
const confirmPass = document.getElementById("passwords");
const confirmErr = document.getElementById("error-confirm");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let arr = [username, emailId, passWord, confirmPass]

    arr.forEach((item) => {
        if (item.value.length === 0) {
            showError(item, item.nextElementSibling, "is required");
        }

    });

    if (username.value.length > 0) {
        username.nextElementSibling.className = "";
        username.className = "input-success";
    }
    if (emailId.value.length > 0) {
        if (!validateEmail(emailId.value.trim())) {
            showError(emailId, emailId.nextElementSibling, "is not valid");
        } else {
            emailId.nextElementSibling.className = "";
            emailId.className = "input-success";
        }
    }
    if (passWord.value.length > 0) {
        if (!validatePassword(passWord.value)) {
            showError(passWord, passWord.nextElementSibling, "must be greater than 8 characters and contain atleast (1 number, 1 lowercase, 1 uppercase and a special character)");
        } else {
            passWord.nextElementSibling.className = "";
            passWord.className = "input-success";
        }
    }
    if (confirmPass.value.length > 0) {
        if (confirmPass.value !== passWord.value) {
            showError(confirmPass, confirmPass.nextElementSibling, "do not match");
        } else {
            confirmPass.nextElementSibling.className = "";
            confirmPass.className = "input-success";
        }
    }



})


function showError(item, input, message) {
    input.innerText = `${item.id} ` + message;
    input.className = "show-error";
    item.className = "input-error";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(String(password));
}



