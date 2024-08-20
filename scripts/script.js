window.addEventListener("load", function() {
    this.document.getElementById("login-btn").addEventListener("click", function() {
        console.log("Login button clicked");
        window.location.href = "/auth/login.html";
    });
    this.document.getElementById("signup-btn").addEventListener("click", function() {
        console.log("Register button clicked");
        window.location.href = "/auth/signup.html";
    });
});