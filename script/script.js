document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const showLogin = document.getElementById("show-login");

    // Show Login Form
    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    });

});
        //show pass//
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".toggle-password").forEach(icon => {
        icon.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const passwordField = document.getElementById(targetId);
            
            if (passwordField.type === "password") {
                passwordField.type = "text";
                this.classList.replace("bx-hide", "bx-show");
            } else {
                passwordField.type = "password";
                this.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});


