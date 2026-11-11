
// REGISTRATION FORM
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("Registration successful!");

        window.location.href = "index.html";
    });
}


// FORGOT PASSWORD FORM
const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("resetEmail").value.trim();

        const newPassword = document.getElementById("newPassword").value;

        const confirmPassword = document.getElementById("confirmNewPassword").value;

        // Get registered user
        const savedUser = localStorage.getItem("registeredUser");

        if (!savedUser) {
            alert("No registered account found!");
            return;
        }

        const user = JSON.parse(savedUser);

        // Check registered email
        if (email !== user.email) {
            alert("This email address is not registered!");
            return;
        }

        // Check password confirmation
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Update password
        user.password = newPassword;

        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("Password successfully reset!");

        // Redirect to login
        window.location.href = "index.html";

    });

}


// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const savedUser = localStorage.getItem("registeredUser");

        if (!savedUser) {
            alert("No account found. Please register first.");
            return;
        }

        const user = JSON.parse(savedUser);

        if (email === user.email && password === user.password) {
            alert("Welcome back, " + user.name + "!");
        } else {
            alert("Invalid email or password!");
        }
    });
}
