const signUp = document.getElementById("sign-up");
const signSignUp = document.getElementById("sign-signup");
const signIn = document.getElementById("sign-in");
const signSignIn = document.getElementById("sign-signin");

signIn.addEventListener("click", () => {
    signSignIn.classList.remove("none");
    signSignUp.classList.remove("block");

    signSignIn.classList.add("block");
    signSignUp.classList.add("none");
});

signUp.addEventListener("click", () => {
    signSignIn.classList.remove("block");
    signSignUp.classList.remove("none");

    signSignIn.classList.add("none");
    signSignUp.classList.add("block");
})
